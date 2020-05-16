$(function () {
    let localStream = null;
    let peer = null;
    let existingCall = null;
    let audioSelect = $('#audioSource');
    let videoSelect = $('#videoSource');
    var socket = io('http://3.133.0.248');
    myState = "";
    nowStreamer = "";

    navigator.mediaDevices.enumerateDevices()
        .then(function (deviceInfos) {
            for (let i = 0; i !== deviceInfos.length; ++i) {
                let deviceInfo = deviceInfos[i];
                let option = $('<option>');
                option.val(deviceInfo.deviceId);
                if (deviceInfo.kind === 'audioinput') {
                    option.text(deviceInfo.label);
                    audioSelect.append(option);
                } else if (deviceInfo.kind === 'videoinput') {
                    option.text(deviceInfo.label);
                    videoSelect.append(option);
                }
            }
            videoSelect.on('change', setupGetUserMedia);
            audioSelect.on('change', setupGetUserMedia);
            setupGetUserMedia();
        }).catch(function (error) {
        console.error('mediaDevices.enumerateDevices() error:', error);
        return;
    });

    peer = new Peer({
        key: '672ecab7-6a69-4ae8-814f-f3a50e089d6c',
        debug: 3
    });

    peer.on('open', function () {
        $('#my-id').text(peer.id);
    });

    peer.on('error', function (err) {
        alert(err.message);
    });

    $('#make-call').submit(function (e) {
        e.preventDefault();
        let roomName = $('#join-room').val();
        if (!roomName) {
            return;
        }
        const call = peer.joinRoom(roomName, {mode: 'sfu', stream: localStream});
        setupCallEventHandlers(call);
        // socketでゲーム参加通知
        socket.emit('login', peer.id);
        console.log('ログインはした')
    });

    $('#end-call').click(function () {
        existingCall.close();
    });

    $('#game-start').click(function () {
        socket.emit('game start', '');
        console.log('ゲームスタート押した');
    });

    socket.on('game started', (gameState) => {
        setupStartUI();
        console.log('ゲームスタート');
        var listeners = gameState.listeners;
        var streamer = gameState.streamer;
        var nextStreamer = gameState.nextStreamer;
        var others = gameState.others;

        //リスナーの処理
        if (listeners.indexOf(peer.id) != -1) { //もし自分がリスナーなら
            myState = 'listener';
            listeners.forEach(listener => {
                if (listener == peer.id) {
                    console.log("自分はinvisibleVideo");
                    invisibleVideo('myStream');
                    muteVideo('myStream');
                } else {
                    console.log(listener + "はinvisibleVideo");
                    invisibleVideo(listener);
                    unmuteVideo();
                }
            });
        }
        ;
        if (listeners.indexOf(peer.id) == -1) { //もし自分がリスナーでないなら
            listeners.forEach(listener => {
                console.log(listener + "はinvisibleMutedVideo");
                invisibleVideo(listener);
                muteVideo(listener);
            });
        }
        ;

        // 次の配信者の処理
        if (nextStreamer == peer.id) {
            myState = "nextStreamer";
            console.log("自分はinvisibleMutedVideo");
            invisibleVideo("myStream");
        } else {
            console.log(nextStreamer + "はinvisibleMutedVideo");
            invisibleVideo(nextStreamer);
            muteVideo(nextStreamer);
        }
        ;

        // その他の処理
        if (others.indexOf(peer.id) != -1) { //もし自分がotherなら
            myState = 'other';
        }
        ;
        others.forEach(other => {
            if (other == peer.id) {
                invisibleVideo("myStream");
            } else {
                invisibleVideo(other);
                muteVideo(other);
                console.log(other + "はinvisibleMutedVideo");
            }
            ;
        });

        //今配信してる人の処理
        nowStreamer = streamer;
        if (myState == "listener") {
            if (nowStreamer == peer.id) {
                console.log("自分はvisibleVideo");
                visibleVideo('myStream');
            } else {
                console.log(nowStreamer + "はvisibleVideo");
                visibleVideo(nowStreamer);
            }
        }
        ;
        if (myState == "nextStreamer") {
            console.log(nowStreamer + "はvisibleMutedVideo");
            visibleVideo(nowStreamer);
        }
        ;
        if (myState != "listener" && myState != "nextStreamer") {
            console.log(nowStreamer + "はinvisibleMutedVideo");
            invisibleVideo(nowStreamer);
        }
        ;
    });

    function setupGetUserMedia() {
        let audioSource = $('#audioSource').val();
        let videoSource = $('#videoSource').val();
        let constraints = {
            audio: {deviceId: {exact: audioSource}},
            video: {deviceId: {exact: videoSource}}
        };
        constraints.video.width = {
            min: 320,
            max: 320
        };
        constraints.video.height = {
            min: 240,
            max: 240
        };

        if (localStream) {
            localStream = null;
        }

        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (stream) {
                $('#myStream').get(0).srcObject = stream;
                localStream = stream;

                if (existingCall) {
                    existingCall.replaceStream(stream);
                }

            }).catch(function (error) {
            console.error('mediaDevice.getUserMedia() error:', error);
            return;
        });
    }

    function setupCallEventHandlers(call) {
        if (existingCall) {
            existingCall.close();
        }
        ;

        existingCall = call;
        setupEndCallUI();
        $('#room-id').text(call.name);

        call.on('stream', function (stream) {
            addVideo(stream);
        });

        call.on('removeStream', function (stream) {
            removeVideo(stream.peerId);
        });

        call.on('peerLeave', function (peerId) {
            removeVideo(peerId);
        });

        call.on('close', function () {
            removeAllRemoteVideos();
            setupMakeCallUI();
        });
    }

    function addVideo(stream) {
        const videoDom = $('<video autoplay>'); // 本番ではmuted = false
        videoDom.attr('id', stream.peerId);
        videoDom.get(0).srcObject = stream;
        $('.videosContainer').append(videoDom);
    }

    function visibleVideo(peerId) {
        $('#' + peerId).show();
    }

    function invisibleVideo(peerId) {
        $('#' + peerId).hide();
    }

    function muteVideo(peerId) {
        $('#' + peerId).attr({'muted': 'true'});
    }

    function unmuteVideo(peerId) {
        $('#' + peerId).attr({'muted': 'false'});
    }

    function removeVideo(peerId) {
        $('#' + peerId).remove();
    }

    function removeAllRemoteVideos() {
        $('.videosContainer').empty();
    }

    function setupMakeCallUI() {
        $('#make-call').show();
        $('#end-call').hide();
    }

    function setupEndCallUI() {
        $('#make-call').hide();
        $('#end-call').show();
    }

    function setupStartUI() {
        $('#make-call').hide();
        $('#game-start').hide();
    }

});