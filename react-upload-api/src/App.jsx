import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [downloadPage, setDownloadPage] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmitting = () => {
    let data = new FormData();
    data.append("file", file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (dataProg) => {
        //Set the progress value to show the progress bar
        setProgress(Math.round((100 * dataProg.loaded) / dataProg.total));
      },
    };

    // Post data using Axios
    axios
      .post("https://store4.gofile.io/uploadFile", data, config)
      .then((response) => {
        // console.log(response.data.data);
        setDownloadPage(response.data.data.downloadPage);
      })
      .catch((err) => console.log(err));

    // Post data using Fetch API
    // fetch("https://store9.gofile.io/uploadFile", {
    //   method: "POST",
    //   body: data,
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((result) => console.log(result))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="App">
      Welcome to upload api <br />
      <input onChange={(e) => setFile(e.target.files[0])} type="file" />
      <button onClick={handleSubmitting}>Upload</button>
      <br />
      <div style={{ textAlign: "center" }}>Uploading: {progress}%</div>
      <progress
        id="progressBar"
        value={progress}
        max="100"
        style={{
          height: "10px",
          width: "100%",
          backgroundColor: "gray",
          color: "blue",
        }}
      ></progress>
      {downloadPage && (
        <a href={downloadPage} target="_blank">
          Click here to go to the download page
        </a>
      )}
    </div>
  );
}

export default App;
