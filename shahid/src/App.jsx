import Heading from "./Heading";
import SkillItem from "./SkillItem";
import WorkItem from "./WorkItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="parent">
      <div className="mainContainer">
        <div className="header">
          <div className="infoDiv">
            <img src="/profile.png" className="profileimg" />
            <div className="subInfoDiv">
              <h1 className="name">Shahid Siddiqui</h1>
              <p className="job">Web Designer and Developer</p>
            </div>
          </div>
          <div className="twoDiv">
            <a
              href="/intern-resume-shahid.pdf"
              target="_blank"
              className="inquiry"
            >
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <g clip-path="url(#clip0_28_113)">
                  <path
                    d="M13.6682 5.4886C13.6682 5.01215 13.2813 4.62528 12.8049 4.62528L6.70642 4.62528C6.22997 4.62528 5.8431 5.01215 5.8431 5.4886C5.8431 5.96504 6.22997 6.35191 6.70642 6.35191L10.7257 6.35001L4.87878 12.1969C4.54146 12.5342 4.54146 13.0793 4.87878 13.4166C5.2161 13.7539 5.76115 13.7539 6.09848 13.4166L11.9435 7.57161L11.9454 11.5871C11.9454 12.0635 12.3323 12.4504 12.8087 12.4504C13.2852 12.4504 13.672 12.0635 13.672 11.5871L13.672 5.4886H13.6682Z"
                    fill="#838383"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_113">
                    <rect
                      width="12.0744"
                      height="13.7993"
                      fill="white"
                      transform="translate(0 8.53784) rotate(-45)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="mailto:b423037@iiit-bh.ac.in?subject=Inquiry%20from%20Portfolio&body=Hi%20Shahid,%20I%20saw%20your%20portfolio..."
              target="_blank"
              className="inquiry inq"
            >
              <span>Inquiry</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <g clip-path="url(#clip0_28_113)">
                  <path
                    d="M13.6682 5.4886C13.6682 5.01215 13.2813 4.62528 12.8049 4.62528L6.70642 4.62528C6.22997 4.62528 5.8431 5.01215 5.8431 5.4886C5.8431 5.96504 6.22997 6.35191 6.70642 6.35191L10.7257 6.35001L4.87878 12.1969C4.54146 12.5342 4.54146 13.0793 4.87878 13.4166C5.2161 13.7539 5.76115 13.7539 6.09848 13.4166L11.9435 7.57161L11.9454 11.5871C11.9454 12.0635 12.3323 12.4504 12.8087 12.4504C13.2852 12.4504 13.672 12.0635 13.672 11.5871L13.672 5.4886H13.6682Z"
                    fill="#838383"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_113">
                    <rect
                      width="12.0744"
                      height="13.7993"
                      fill="white"
                      transform="translate(0 8.53784) rotate(-45)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div className="content">
          <div className="firstbox">
            <div className="box about">
              <Heading>About</Heading>
              <p className="description">
                Shahid is a passionate developer focused on building meaningful
                digital products.
                <br />
                <br />
                His work blends thoughtful design and a deep love for solving
                real-world problems.
              </p>
            </div>
            <div className="subbox">
              <div className="box location">
                <div className="locationdiv">
                  <p>Location</p>
                  <p>Deoghar</p>
                </div>
              </div>
              <div className="box link">
                <a
                  href="https://www.instagram.com/kya_yaar_shahid/"
                  target="_blank"
                  className="socialdiv"
                >
                  <img className="socialpng" src="/Instagram.png" alt="" />
                </a>
                <a
                  href="https://discord.com/users/872886208068476929"
                  target="_blank"
                  className="socialdiv"
                >
                  <img
                    className="socialpng discord"
                    src="/discord.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/reheshahid/"
                  target="_blank"
                  className="socialdiv"
                >
                  <img
                    className="socialpng linkedin"
                    src="/linkedin.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.reddit.com/u/Few-Instruction-1993/s/7giey0PJ5v"
                  target="_blank"
                  className="socialdiv"
                >
                  <img className="socialpng" src="/reddit.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="box work">
            <Heading>Work</Heading>
            <div className="workItems element-with-scroll">
              <div className="workItemsContainer">
                <WorkItem
                  title="Velvet"
                  link="https://velvet-my28.onrender.com/"
                  date="Feb 2026"
                >
                  Velvet is a secure file-sharing platform built for simplicity
                  and control. Create protected links with expiry, download
                  limits, and password rules.
                </WorkItem>
              </div>
              <div className="workItemsContainer">
                <WorkItem
                  title="Eventually"
                  link="http://eventually-env.eba-5k3i7unv.eu-north-1.elasticbeanstalk.com/"
                  date="Jan 2026"
                >
                  Eventually is a full-stack event management application
                  featuring event creation, user registration, attendance
                  tracking, and reliable timezone-aware scheduling.
                </WorkItem>
              </div>
              <div className="workItemsContainer">
                <WorkItem
                  title="Unique Hosting"
                  link="https://www.uniquehosting.space/"
                  date="July 2025"
                >
                  Developed a responsive, SEO-optimized website for Unique
                  Hosting, a platform offering free Minecraft server hosting.
                </WorkItem>
              </div>
              <div className="workItemsContainer">
                <WorkItem
                  title="Surplus"
                  link="https://surplus.live/"
                  date="May 2025"
                >
                  Built Surplus, a cross-platform gym log app that helps users
                  track workouts by date, log sets effortlessly, and monitor
                  progress over time.
                </WorkItem>
              </div>
              <div className="workItemsContainer">
                <WorkItem
                  title="Omnifood"
                  link="https://omnifood-for-you-anywhere.netlify.app/"
                  date="Aug 2024"
                >
                  Developed and designed a modern, visually engaging website for
                  Omnifood, a daily subscription-based food delivery startup.
                </WorkItem>
              </div>
              <div className="workItemsContainer">
                <WorkItem
                  border={false}
                  link="https://deceptioner.site/"
                  title="Deceptioner"
                  date="Dec 2024"
                >
                  Contributed to the frontend development of Deceptioner, an
                  advanced AI rewriting tool designed to bypass AI content
                  detectors.
                </WorkItem>
              </div>
            </div>
          </div>
          <div className="box skills">
            <Heading>Skills</Heading>
            <div className="skillItems element-with-scroll">
              <div className="skillItemsContainer">
                <SkillItem
                  title="Web Design and Development"
                  svg={
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 43 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.9678 36.0816C28.745 35.9461 28.5509 35.7643 28.3965 35.544C28.3253 35.4425 28.2651 35.335 28.2152 35.224H2.89601V10.2681H37.2632V26.5634C37.9968 26.6297 38.6125 27.1116 38.8709 27.7714C39.0998 27.646 39.3548 27.5685 39.6229 27.5448C39.8043 27.5291 39.9844 27.5403 40.1591 27.5748V4.05099C40.1591 2.72022 39.0766 1.63757 37.746 1.63757H2.41331C1.08265 1.63757 0 2.72022 0 4.05099V35.7068C0 37.0376 1.08265 38.1202 2.41331 38.1202H28.7479C28.5424 37.704 28.4936 37.2342 28.6145 36.7822C28.6843 36.5222 28.8049 36.2851 28.9678 36.0816ZM34.613 5.69017C34.613 5.19805 35.012 4.799 35.5041 4.799H36.3951C36.8874 4.799 37.2862 5.19794 37.2862 5.69017V6.70012C37.2862 7.19224 36.8873 7.59119 36.3951 7.59119H35.5041C35.0118 7.59119 34.613 7.19224 34.613 6.70012V5.69017ZM30.4695 5.69017C30.4695 5.19805 30.8684 4.799 31.3605 4.799H32.2517C32.7439 4.799 33.1428 5.19794 33.1428 5.69017V6.70012C33.1428 7.19224 32.7438 7.59119 32.2517 7.59119H31.3605C30.8684 7.59119 30.4695 7.19224 30.4695 6.70012V5.69017ZM26.3259 5.69017C26.3259 5.19805 26.7249 4.799 27.2169 4.799H28.108C28.6002 4.799 28.9992 5.19794 28.9992 5.69017V6.70012C28.9992 7.19224 28.6002 7.59119 28.108 7.59119H27.2169C26.7249 7.59119 26.3259 7.19224 26.3259 6.70012V5.69017Z"
                        fill="#efdcc3"
                      />
                      <path
                        d="M42.9943 34.3822L42.7265 32.8636C42.6904 32.6591 42.4955 32.5225 42.2908 32.5586L40.9404 32.7966C40.7783 32.4161 40.5713 32.0598 40.3255 31.7337L41.2076 30.6822C41.2717 30.6061 41.3029 30.5072 41.2943 30.4078C41.2855 30.3084 41.2376 30.2166 41.1612 30.1524L39.9801 29.1612C39.9037 29.0971 39.8047 29.066 39.7054 29.0747C39.606 29.0834 39.5142 29.1312 39.4501 29.2076L38.5689 30.2582C38.2071 30.0739 37.8201 29.9318 37.4147 29.838V28.4667C37.4147 28.259 37.2463 28.0905 37.0386 28.0905H35.4965C35.289 28.0905 35.1204 28.259 35.1204 28.4667V29.838C34.7148 29.9317 34.3283 30.0739 33.9663 30.2582L33.0849 29.2077C32.9513 29.0486 32.7142 29.0279 32.5549 29.1613L31.3738 30.1524C31.2974 30.2166 31.2496 30.3084 31.2408 30.4078C31.2322 30.5072 31.2633 30.6062 31.3274 30.6826L32.2096 31.7338C31.9642 32.0598 31.7568 32.4164 31.5947 32.7967L30.2442 32.5586C30.0401 32.5226 29.8448 32.6591 29.8085 32.8636L29.5409 34.3822C29.5236 34.4804 29.546 34.5813 29.603 34.6632C29.6605 34.745 29.7474 34.8006 29.8457 34.8179L31.1971 35.0561C31.2192 35.4748 31.2921 35.8799 31.4094 36.2656L30.2216 36.9511C30.1352 37.0008 30.0722 37.0831 30.0463 37.1794C30.0205 37.2757 30.0341 37.3783 30.0839 37.4648L30.8548 38.8001C30.9045 38.8866 30.9868 38.9495 31.0831 38.9753C31.1151 38.9839 31.1478 38.9881 31.1805 38.9881C31.2459 38.9881 31.3107 38.9711 31.3685 38.9378L32.5572 38.2514C32.8367 38.5509 33.1523 38.8163 33.4972 39.0408L33.0278 40.3303C32.9938 40.4241 32.9982 40.5275 33.0404 40.6179C33.0826 40.7083 33.1589 40.7783 33.2526 40.8123L34.7013 41.3395C34.7429 41.3547 34.7865 41.3624 34.83 41.3624C34.8843 41.3624 34.9389 41.3507 34.9891 41.3271C35.0796 41.285 35.1493 41.2086 35.1834 41.1148L35.6527 39.8253C35.8539 39.8497 36.0587 39.8623 36.2665 39.8623C36.4742 39.8623 36.679 39.8495 36.8802 39.8253L37.3496 41.1148C37.3836 41.2086 37.4537 41.285 37.5439 41.3271C37.594 41.3506 37.6484 41.3624 37.703 41.3624C37.7464 41.3624 37.79 41.3549 37.8316 41.3395L39.2805 40.8123C39.374 40.7783 39.4504 40.7081 39.4925 40.6179C39.5347 40.5275 39.5392 40.4241 39.5051 40.3303L39.0357 39.041C39.3803 38.8165 39.6959 38.5509 39.9757 38.2516L41.1644 38.938C41.2221 38.9711 41.287 38.9883 41.3524 38.9883C41.385 38.9883 41.418 38.9839 41.4498 38.9755C41.5462 38.9497 41.6283 38.8866 41.6781 38.8003L42.449 37.4648C42.4988 37.3785 42.5124 37.2757 42.4866 37.1794C42.4607 37.0833 42.3977 37.001 42.3113 36.9511L41.1237 36.2658C41.241 35.88 41.3137 35.4749 41.3358 35.0563L42.6872 34.818C42.7855 34.8007 42.8727 34.7451 42.9299 34.6633C42.9892 34.5813 43.0116 34.4804 42.9943 34.3822ZM36.2677 36.7953C35.1254 36.7953 34.1992 35.8691 34.1992 34.7268C34.1992 33.5844 35.1255 32.6583 36.2677 32.6583C37.41 32.6583 38.3362 33.5844 38.3362 34.7268C38.3362 35.8691 37.41 36.7953 36.2677 36.7953Z"
                        fill="#efdcc3"
                      />
                      <path
                        d="M16.8644 24.1018C16.8644 23.6152 16.5793 23.1682 16.1378 22.9632L12.0977 21.0861L16.1379 19.2087C16.5793 19.0035 16.8644 18.5566 16.8644 18.0702V18.0376C16.8644 17.6065 16.6475 17.2107 16.2844 16.9794C16.0834 16.8511 15.8495 16.7832 15.6079 16.7832C15.4258 16.7832 15.2431 16.8232 15.0795 16.8992L8.62049 19.9029C8.17926 20.1081 7.89429 20.5549 7.89429 21.0412V21.131C7.89429 21.6167 8.17916 22.0632 8.62059 22.2695L15.0803 25.2734C15.2473 25.3507 15.4251 25.3899 15.6088 25.3899C15.8482 25.3899 16.0815 25.3219 16.2844 25.1929C16.6477 24.9607 16.8645 24.5652 16.8645 24.1346L16.8644 24.1018Z"
                        fill="#efdcc3"
                      />
                      <path
                        d="M23.2373 13.7226C23.0017 13.4 22.6227 13.2075 22.2235 13.2075H22.1913C21.6431 13.2075 21.1624 13.5582 20.9954 14.0795L16.7398 27.2655C16.6186 27.6462 16.6868 28.0655 16.9222 28.388C17.1578 28.7103 17.5367 28.9029 17.936 28.9029H17.9683C18.5163 28.9029 18.9966 28.5521 19.1634 28.0309L23.4186 14.846C23.5408 14.4656 23.4731 14.0456 23.2373 13.7226Z"
                        fill="#efdcc3"
                      />
                      <path
                        d="M31.5387 19.9026L25.0795 16.899C24.9165 16.8232 24.734 16.7832 24.552 16.7832C24.3105 16.7832 24.0764 16.8509 23.8756 16.979C23.5119 17.2107 23.2949 17.6064 23.2949 18.0375V18.0701C23.2949 18.5561 23.5799 19.0031 24.0216 19.2091L28.0616 21.0861L24.0215 22.9631C23.5801 23.1681 23.2949 23.6151 23.2949 24.1017V24.1345C23.2949 24.5651 23.5119 24.9605 23.8754 25.1929C24.0775 25.3217 24.311 25.3898 24.5507 25.3898C24.7342 25.3898 24.9119 25.3506 25.08 25.273L31.5395 22.2691C31.9805 22.0633 32.2653 21.6167 32.2653 21.131V21.0412C32.265 20.5548 31.98 20.108 31.5387 19.9026Z"
                        fill="#efdcc3"
                      />
                    </svg>
                  }
                >
                  Building intuitive, high-performance web experiences with a
                  focus on usability, design, and real-world impact.
                </SkillItem>
              </div>
              <div className="skillItemsContainer">
                <SkillItem
                  title="App Development"
                  svg={
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      size="3x"
                      style={{ color: "#efdcc3" }}
                    />
                  }
                >
                  I develop mobile apps using React Native (Expo) that run
                  consistently across iOS and Android with responsive interfaces
                  for production-ready builds.
                </SkillItem>
              </div>
              <div className="skillItemsContainer">
                <SkillItem
                  title="Audio Design"
                  svg={
                    <svg
                      width="42"
                      height="43"
                      viewBox="0 0 42 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.577475 20.4071C0.577475 20.4071 1.52248 20.2458 1.92498 20.6579C2.30998 21.07 2.04748 21.93 1.53998 21.9479C1.01498 21.9658 0.542475 22.0554 0.192475 21.6971C0.105598 21.5954 0.045488 21.4728 0.017835 21.3407C-0.00981809 21.2087 -0.00409973 21.0716 0.0344488 20.9424C0.0729974 20.8132 0.143101 20.6963 0.238125 20.6026C0.333149 20.5089 0.449951 20.4416 0.577475 20.4071ZM10.8675 26.2479C10.78 26.2658 10.675 26.2121 10.5875 26.1404C9.90498 25.1908 9.65998 21.8941 9.34498 21.6971C9.02998 21.5 7.85748 23.5246 5.51248 23.3096C4.54998 23.22 3.55248 22.575 2.97498 22.1271C3.02748 21.3925 3.02748 19.6366 4.47998 20.21C5.37248 20.5504 6.87748 21.5 8.20748 19.7979C9.67748 17.9166 10.4825 18.4721 10.955 18.8841C11.445 19.2783 11.13 21.4104 11.8475 20.8191C12.565 20.2279 15.4875 16.5371 15.4875 16.5371C15.4875 16.5371 17.745 14.2258 18.095 16.6446C18.445 19.0812 19.915 21.7866 20.3175 21.6971C20.7025 21.6254 25.2525 12.255 25.9 11.6458C26.5475 11.0366 28.7525 11.1262 28.6475 12.6671C28.5425 14.2258 28.315 23.865 28.315 23.865C28.315 23.865 28.0525 26.5883 28.4725 25.1371C28.6475 24.5279 28.84 23.9904 29.0675 23.3454C30.1875 19.7083 32.095 13.4733 33.0575 10.2662C33.2675 9.51373 33.46 8.85081 33.6175 8.34914V8.33123C33.67 8.09831 33.7225 7.91914 33.775 7.7579C33.8625 7.48915 33.915 7.29206 33.9325 7.25623C33.9675 7.13081 34.09 7.04123 34.265 6.96956C34.4225 6.86206 34.615 6.86206 34.8075 6.86206C35.35 6.80831 36.015 6.87998 36.6275 7.05915C36.82 7.05915 37.0125 7.1129 37.1875 7.25623C37.1875 7.25623 37.205 7.25623 37.2225 7.27415C37.275 7.30998 37.3275 7.36373 37.3975 7.45331H37.415C37.4325 7.48914 37.4675 7.5429 37.5025 7.57873C37.835 8.09831 38.045 9.02998 37.835 10.6962C37.31 14.835 36.9075 23.3633 36.9075 23.3633C36.9075 23.3633 36.82 23.7754 37.6775 21.9837C37.695 21.9121 37.73 21.8583 37.765 21.8046C37.8175 21.7687 37.87 21.7329 37.94 21.6612C38.4475 21.0162 39.8475 20.6579 40.8275 20.6579C41.23 20.7116 41.58 20.8191 41.7725 20.9446C42.1575 21.5358 41.93 23.7216 41.93 23.7216C41.125 23.7933 39.585 24.2412 39.0425 24.3129C38.5 24.4025 37.6775 27.9858 36.5225 27.6275C35.3675 27.2512 32.795 25.6208 32.795 25.4058C32.795 25.2087 33.005 22.8258 33.0575 22.1987V22.0733V22.0554C33.11 21.5716 33.075 21.3566 32.8475 21.8404C32.655 22.2525 31.8325 24.9221 30.905 27.8246C30.8175 28.0754 29.0675 33.4325 28.84 34.0775C28.5775 34.83 28.3325 35.4212 28.175 35.7079C27.9475 36.0483 27.615 36.2454 27.16 36.12C26.0225 35.7616 24.605 34.185 24.5875 33.7908C24.5525 31.5691 24.6925 19.6366 24.1675 20.6221C23.6075 21.6433 19.39 28.7204 19.39 28.7204C19.32 28.7383 19.2675 28.7383 19.1975 28.7383C18.9 28.7025 18.4275 28.6129 18.305 28.3262C18.305 28.3083 18.2875 28.2904 18.2875 28.2725C18.27 28.2546 18.27 28.2366 18.2525 28.2008C18.2 28.0037 18.1825 27.7887 18.13 27.6096C17.9375 26.9646 17.64 26.0329 17.3075 25.1012C16.835 23.4887 16.3275 21.8404 16.24 21.6612C16.0825 21.3029 15.855 21.4462 15.6275 21.6612C14.6825 22.4675 12.6875 26.0508 10.8675 26.2479Z"
                        fill="#efdcc3"
                      />
                    </svg>
                  }
                >
                  Crafting original soundscapes for 3+ years with a focus on
                  experimentation and uniqueness in every track.
                </SkillItem>
              </div>
              <div className="skillItemsContainer">
                <SkillItem
                  border={false}
                  title="Graphic Design"
                  svg={
                    <svg
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.9675 40.3783L36.3547 33.1526H38.3094C39.0827 33.1526 39.7101 32.5251 39.7101 31.7518C39.7101 30.9785 39.0827 30.3604 38.3094 30.3604H34.9539L27.9324 16.3075C28.2991 15.4582 28.5041 14.5236 28.5041 13.5412C28.5041 11.2566 27.3999 9.23047 25.7025 7.95122V4.20241C25.7026 1.88511 23.8174 0 21.5001 0C19.1828 0 17.307 1.88511 17.307 4.20241V7.95114C15.6096 9.23047 14.496 11.2566 14.496 13.5411C14.496 14.5235 14.7011 15.4581 15.0677 16.3074L8.04601 30.3603H4.69042C3.91659 30.3603 3.28964 30.9784 3.28964 31.7517C3.28964 32.525 3.91667 33.1525 4.69042 33.1525H6.64532L3.03248 40.3782C2.68689 41.0704 2.96731 41.9112 3.65901 42.2577C7.11404 43.9877 11.3298 42.5797 13.057 39.125L16.0433 33.1524H20.1087V34.5532C20.1087 35.3265 20.7263 35.954 21.5001 35.954C22.274 35.954 22.9009 35.3265 22.9009 34.5532V33.1524H26.957L29.9433 39.125C31.6758 42.5899 35.8794 43.9885 39.3409 42.2577C40.0331 41.9113 40.3131 41.0705 39.9675 40.3783ZM22.901 30.3603V28.9501C22.901 28.1768 22.274 27.5493 21.5002 27.5493C20.7264 27.5493 20.1088 28.1768 20.1088 28.9501V30.3603H17.4441L21.5002 22.2388L25.5563 30.3603H22.901ZM21.5001 17.7053C19.0289 17.7053 17.2977 15.7358 17.2977 13.5412C17.2977 11.2239 19.1828 9.33881 21.5001 9.33881C23.8174 9.33881 25.7026 11.2239 25.7026 13.5412C25.7026 15.7291 23.9805 17.7053 21.5001 17.7053Z"
                        fill="#efdcc3"
                      />
                    </svg>
                  }
                >
                  Designing bold and expressive visuals that blend
                  experimentation with quality.
                </SkillItem>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div>@ 2026 Shahid Siddiqui</div>
          <div>Version 1.4.0 18/02/26</div>
        </div>
      </div>
    </div>
  );
}
