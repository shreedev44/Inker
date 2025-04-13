import React from "react";

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
}

const Loader: React.FC<LogoProps> = ({ className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 255 102"
      className={className}
      style={style}
    >
      <style>
        {`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          25%, 75% { opacity: 1; }
        }
        .triangle {
          fill: #FFAA00;
          animation: fadeInOut 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .i-shape {
          fill: #292929;
          animation: fadeInOut 3s ease-in-out infinite;
          animation-delay: 0.7s;
        }
        .letter-n {
          fill: #292929;
          animation: fadeInOut 3s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        .letter-k {
          fill: #292929;
          animation: fadeInOut 3s ease-in-out infinite;
          animation-delay: 1.6s;
        }
        .letter-k-2 {
          fill: #292929;
          animation: fadeInOut 3s ease-in-out infinite;
          animation-delay: 1.8s;
        }
        .letter-e {
          fill: #292929;
          animation: fadeInOut 3s ease-in-out infinite;
          animation-delay: 2.0s;
        }
        .letter-r {
          fill: #292929;
          animation: fadeInOut 3s ease-in-out infinite;
          animation-delay: 2.4s;
        }
        .dot {
          fill: #FFAA00;
          animation: fadeInOut 3s ease-in-out infinite;
          animation-delay: 2.8s;
        }
        `}
      </style>

      {/* SVG Paths */}
      <path
        className="triangle"
        d="M14 41.5473L25.8718 33.0775C27.5706 31.4786 27.3022 28.0115 25.3944 26.9109L13.7142 18.295C11.9583 17.2821 10 19.002 10 21.557V38.5918C10 41.4713 12 42.7549 14 41.5473Z"
      />
      <path
        className="i-shape"
        d="M23.7994 39.3616L11.0853 48.5C10.4094 48.9148 10 49.634 10 50.4066V81.7363C10 83.5359 12.075 84.6136 13.6332 83.6232L25.9461 75.7972C26.604 75.3791 27 74.6701 27 73.9102V41.2403C27 39.457 25.3596 38.4042 23.7994 39.3616Z"
      />
      <path
        className="letter-n"
        d="M40.362 75C40.362 72.4853 40.7993 71.0913 41.674 70.818L46.348 68.932L45.446 70.326V43.184L46.43 44.414L41.592 43.184C40.772 42.9653 40.362 41.626 40.362 39.166C42.9313 38.7287 44.9267 38.428 46.348 38.264C47.824 38.1 49.054 38.018 50.038 38.018C51.8967 38.018 53.2087 38.428 53.974 39.248C54.794 40.068 55.204 41.38 55.204 43.184V45.152L54.794 44.906H55.778C58.1833 42.5007 60.78 40.6147 63.568 39.248C66.356 37.8267 69.0073 37.116 71.522 37.116C77.8087 37.116 80.952 41.38 80.952 49.908V69.916L80.05 68.768L86.036 70.49C86.036 71.5287 85.9267 72.376 85.708 73.032C85.544 73.6333 85.1613 74.2893 84.56 75H66.602C66.602 72.4853 67.0393 71.0913 67.914 70.818L71.44 69.506L70.62 70.9V51.138C70.62 46.4913 68.898 44.168 65.454 44.168C64.0327 44.168 62.6387 44.4687 61.272 45.07C59.96 45.6167 58.7847 46.3 57.746 47.12C56.7073 47.94 55.9147 48.7327 55.368 49.498L55.778 48.104V70.408L54.794 69.26L59.878 70.49C59.878 71.5287 59.7687 72.376 59.55 73.032C59.3313 73.6333 58.9213 74.2893 58.32 75H40.362Z"
      />
      <path
        className="letter-k"
        d="M97.3501 75C97.3501 73.688 97.4594 72.704 97.6781 72.048C97.8967 71.392 98.2247 70.982 98.6621 70.818L103.828 68.932L102.926 70.162V19.978L103.91 21.208L98.5801 19.978C97.7601 19.7593 97.3501 18.42 97.3501 15.96C99.4274 15.632 101.341 15.3587 103.09 15.14C104.894 14.9213 106.753 14.812 108.666 14.812C111.727 14.812 113.258 16.5613 113.258 20.06V70.49L112.11 69.26L117.358 70.49C117.358 71.5287 117.249 72.376 117.03 73.032C116.811 73.6333 116.401 74.2893 115.8 75H97.3501Z"
      />
      <path
        className="letter-k-2"
        d="M134.742 75.984C132.829 75.984 130.833 75.3553 128.756 74.098C126.679 72.8407 124.383 70.6813 121.868 67.62C119.353 64.5587 116.429 60.322 113.094 54.91L126.132 43.348L125.476 44.66L120.474 43.184C120.474 41.4893 120.911 39.986 121.786 38.674H139.498C139.498 40.15 139.416 41.1887 139.252 41.79C139.088 42.3913 138.733 42.774 138.186 42.938L129.904 45.808L135.398 42.364L120.638 55.648L121.95 52.04C123.754 54.7187 125.749 57.288 127.936 59.748C130.123 62.1533 132.364 64.3127 134.66 66.226C137.011 68.0847 139.279 69.588 141.466 70.736C141.466 72.3213 140.837 73.606 139.58 74.59C138.323 75.5193 136.71 75.984 134.742 75.984Z"
      />
      <path
        className="letter-e"
        d="M168.967 75.984C165.359 75.984 162.189 75.2187 159.455 73.688C156.722 72.1573 154.59 70.0253 153.059 67.292C151.583 64.5587 150.845 61.388 150.845 57.78C150.845 53.844 151.72 50.318 153.469 47.202C155.219 44.086 157.569 41.626 160.521 39.822C163.528 38.018 166.863 37.116 170.525 37.116C173.696 37.116 176.457 37.7993 178.807 39.166C181.158 40.478 182.962 42.3367 184.219 44.742C185.531 47.0927 186.187 49.8807 186.187 53.106C186.187 54.4727 185.996 55.3747 185.613 55.812C185.231 56.1947 184.629 56.386 183.809 56.386H158.225V52.532L177.577 52.04L176.675 53.27C176.73 50.646 176.484 48.432 175.937 46.628C175.391 44.7693 174.598 43.3753 173.559 42.446C172.521 41.462 171.263 40.97 169.787 40.97C167.491 40.97 165.605 42.2 164.129 44.66C162.653 47.0653 161.915 50.4273 161.915 54.746C161.915 57.9713 162.38 60.7593 163.309 63.11C164.239 65.4607 165.605 67.2647 167.409 68.522C169.213 69.7247 171.427 70.326 174.051 70.326C176.074 70.326 177.987 69.8887 179.791 69.014C181.595 68.1393 183.345 66.882 185.039 65.242L186.351 68.194C185.094 69.7247 183.536 71.0913 181.677 72.294C179.819 73.442 177.796 74.344 175.609 75C173.477 75.656 171.263 75.984 168.967 75.984Z"
      />
      <path
        className="letter-r"
        d="M199.298 75C199.298 72.5947 199.735 71.2007 200.61 70.818L205.284 68.932L204.382 70.326V43.184L205.366 44.414L200.528 43.184C200.145 43.0747 199.845 42.692 199.626 42.036C199.407 41.3253 199.298 40.3687 199.298 39.166C201.977 38.7287 204.027 38.428 205.448 38.264C206.869 38.1 208.045 38.018 208.974 38.018C210.887 38.018 212.227 38.428 212.992 39.248C213.757 40.068 214.14 41.4893 214.14 43.512V46.3L213.402 45.48H214.632C215.889 42.9653 217.529 40.9427 219.552 39.412C221.575 37.8813 223.57 37.116 225.538 37.116C227.834 37.116 229.529 37.6353 230.622 38.674C231.715 39.7127 232.262 41.134 232.262 42.938C232.262 44.3047 231.77 45.5073 230.786 46.546C229.857 47.53 228.681 48.022 227.26 48.022C226.604 46.71 225.866 45.808 225.046 45.316C224.281 44.7693 223.379 44.496 222.34 44.496C221.028 44.496 219.607 45.0153 218.076 46.054C216.545 47.0927 215.233 48.4047 214.14 49.99L214.714 48.022V70.408L213.566 68.604L221.11 70.49C221.11 71.474 221.001 72.294 220.782 72.95C220.563 73.606 220.153 74.2893 219.552 75H199.298Z"
      />
      <ellipse className="dot" cx="233.335" cy="71" rx="4.33508" ry="4" />
    </svg>
  );
};

export default Loader;