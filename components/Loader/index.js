import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-container-image">
        <img
          className="loader-image"
          src="/loader.jpeg"
          alt="loader"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <span className="loader"></span>

      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 99999;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .loader-container-image {
          width: 90px;
          height: 90px;
        }
        .loader-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .loaders {
          margin-top: 10px;
        }
        .loader,
        .loader:before,
        .loader:after {
          border-radius: 50%;
          width: 2.5em;
          height: 2.5em;
          animation-fill-mode: both;
          animation: bblFadInOut 1.8s infinite ease-in-out;
        }
        .loader {
          color: #3d3d3c;
          font-size: 4px;
          position: relative;
          text-indent: -9999em;
          transform: translateZ(0);
          animation-delay: -0.16s;
        }
        .loader:before,
        .loader:after {
          content: "";
          position: absolute;
          top: 0;
        }
        .loader:before {
          left: -3.5em;
          animation-delay: -0.32s;
        }
        .loader:after {
          left: 3.5em;
        }

        @keyframes bblFadInOut {
          0%,
          80%,
          100% {
            box-shadow: 0 2.5em 0 -1.3em;
          }
          40% {
            box-shadow: 0 2.5em 0 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
