import React, { useState } from 'react';

function Webcam() {
    const [isStreaming, setIsStreaming] = useState(false);
    const [data, setData] = useState(null);
    const [intervalId, setIntervalId] = useState(null);
    const [isError, setIsError] = useState(false);
    const api_endpoint = 'http://127.0.0.1:5000/analyze?api_key=BETA_TESTER';

    function handleStartStream() {
        // Connect to the ESP32-CAM's stream at http://192.168.4.1/mjpeg/1
        // and set the src of the video element to the stream url
        const videoElement = document.getElementById('webcam-stream');
        videoElement.src = 'http://192.168.4.1/mjpeg/1';
        videoElement.crossOrigin = "anonymous";

        // Check if src is accessible
        videoElement.addEventListener('error', (e) => {
            console.log('Error loading video stream');
            setIsError(true);
        });

        // Check if src is loaded
        videoElement.addEventListener('canplay', (e) => {
            console.log('Video stream loaded');
        });

        // Check if src is playing
        videoElement.addEventListener('playing', (e) => {
            console.log('Video stream playing');
        });

        // Check if api endpoint is accessible
        fetch(api_endpoint)
            .then((response) => {
                if (response.ok) {
                    console.log('API endpoint accessible');
                } else {
                    console.clear();
                    console.log('API endpoint not accessible');
                    setIsError(true);
                    // stop fetching
                    clearInterval(intervalId);
                }
            })
            .catch((error) => {
                console.clear();
                console.log('API endpoint not accessible');
                setIsError(true);
                // stop fetching
                clearInterval(intervalId);
                // after 5 seconds, remove error message
                setTimeout(() => {
                    setIsError(false);
                }
                , 5000);
            });


        if (isError !== true) {
        // Send images to the server and retrieve predictions
        const intervalId = setInterval(async () => {
            if (!isStreaming) {
                clearInterval(intervalId);
                return;
            }
            if (isError) {
                clearInterval(intervalId);
                return;
            }
            // capture the image from the video element
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(async (blob) => {
                // send image to server and retrieve predictions
                try {
                    const formData = new FormData();
                    formData.append("file", blob, "image.jpg");

                    const resp = await fetch('http://127.0.0.1:5000/analyze?api_key=BETA_TESTER', {
                        method: 'POST',
                        body: formData,
                    });
                    setData(await resp.json());
                    setIsStreaming(true);
                } catch (err) {
                    console.error(err);
                }
            });
        }, 2000);
        setIntervalId(intervalId);

        return () => clearInterval(intervalId);
        }
    }

    function handleStopStream() {
        // Stop the stream and clear the src of the video element
        const videoElement = document.getElementById('webcam-stream');
        videoElement.src = '';
        clearInterval(intervalId);
        setIsStreaming(false);
    }

    return (
        <div>
            <br></br>
            <div style={{ position: 'relative', margin: 'auto', height: '500px', width: '500px', border: '1px solid black', display: 'block-inline' }}>
                <div style={{position: 'absolute', top:'50%', bottom: '50%', margin: 'auto', width: '100%'}}>
                        { isError ? 'Camera not connected!' : <div>
                        </div> }
                        <img id='webcam-stream' src='' height={500} width={500} alt='Not streaming, Click start streaming to show images.'/>
                </div>
            </div>
            <div>
                <br></br>
                <button onClick={handleStartStream} disabled={isStreaming}>
                    Start Stream
                </button>
                <button onClick={handleStopStream} disabled={!isStreaming}>
                    Stop Stream
                </button>
            </div>
            {isStreaming ? 
                <ul>
                { data ? (data || []).prediction : 'Detecting...'}
                </ul>
                : null
            }
        </div>
    );
}

export default Webcam;
