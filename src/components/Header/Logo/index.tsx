import React from "react";
import styles from "./Logo.module.scss"

export const Logotype = () => {
    return (
        <a className={`${styles.logo_link} header__logo`} href="/">
            <svg width="384" height="84" viewBox="0 0 384 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M32.2559 57.0537V62.8838H9.60938V57.0537H32.2559ZM11.6895 20.2275V62.8838H4.33594V20.2275H11.6895ZM29.2969 38.04V43.7822H9.60938V38.04H29.2969ZM32.1094 20.2275V26.0869H9.60938V20.2275H32.1094ZM62.1973 20.2275H69.5215V48.7334C69.5215 51.9756 68.8184 54.6904 67.4121 56.8779C66.0059 59.0654 64.0918 60.7158 61.6699 61.8291C59.2676 62.9229 56.582 63.4697 53.6133 63.4697C50.5469 63.4697 47.8125 62.9229 45.4102 61.8291C43.0078 60.7158 41.1133 59.0654 39.7266 56.8779C38.3594 54.6904 37.6758 51.9756 37.6758 48.7334V20.2275H45V48.7334C45 50.7842 45.3516 52.4736 46.0547 53.8018C46.7578 55.1104 47.7539 56.0771 49.043 56.7021C50.332 57.3271 51.8555 57.6396 53.6133 57.6396C55.3711 57.6396 56.8848 57.3271 58.1543 56.7021C59.4434 56.0771 60.4395 55.1104 61.1426 53.8018C61.8457 52.4736 62.1973 50.7842 62.1973 48.7334V20.2275ZM77.5195 20.2275H92.6074C95.8496 20.2275 98.6133 20.7158 100.898 21.6924C103.184 22.6689 104.932 24.1143 106.143 26.0283C107.373 27.9229 107.988 30.2666 107.988 33.0596C107.988 35.1885 107.598 37.0635 106.816 38.6846C106.035 40.3057 104.932 41.6729 103.506 42.7861C102.08 43.8799 100.381 44.7295 98.4082 45.335L96.1816 46.4189H82.6172L82.5586 40.5889H92.7246C94.4824 40.5889 95.9473 40.2764 97.1191 39.6514C98.291 39.0264 99.1699 38.1768 99.7559 37.1025C100.361 36.0088 100.664 34.7783 100.664 33.4111C100.664 31.9268 100.371 30.6377 99.7852 29.5439C99.2188 28.4307 98.3398 27.5811 97.1484 26.9951C95.957 26.3896 94.4434 26.0869 92.6074 26.0869H84.873V62.8838H77.5195V20.2275ZM101.865 62.8838L91.8457 43.7236L99.5508 43.6943L109.717 62.5029V62.8838H101.865ZM172.881 46.9756H161.777V41.1455H172.881C174.814 41.1455 176.377 40.833 177.568 40.208C178.76 39.583 179.629 38.7236 180.176 37.6299C180.742 36.5166 181.025 35.2471 181.025 33.8213C181.025 32.4736 180.742 31.2139 180.176 30.042C179.629 28.8506 178.76 27.8936 177.568 27.1709C176.377 26.4482 174.814 26.0869 172.881 26.0869H164.033V62.8838H156.68V20.2275H172.881C176.182 20.2275 178.984 20.8135 181.289 21.9854C183.613 23.1377 185.381 24.7393 186.592 26.79C187.803 28.8213 188.408 31.1455 188.408 33.7627C188.408 36.5166 187.803 38.8799 186.592 40.8525C185.381 42.8252 183.613 44.3389 181.289 45.3936C178.984 46.4482 176.182 46.9756 172.881 46.9756ZM229.014 40.3838V42.7275C229.014 45.9502 228.594 48.8408 227.754 51.3994C226.914 53.958 225.713 56.1357 224.15 57.9326C222.607 59.7295 220.752 61.1064 218.584 62.0635C216.416 63.001 214.014 63.4697 211.377 63.4697C208.76 63.4697 206.367 63.001 204.199 62.0635C202.051 61.1064 200.186 59.7295 198.604 57.9326C197.021 56.1357 195.791 53.958 194.912 51.3994C194.053 48.8408 193.623 45.9502 193.623 42.7275V40.3838C193.623 37.1611 194.053 34.2803 194.912 31.7412C195.771 29.1826 196.982 27.0049 198.545 25.208C200.127 23.3916 201.992 22.0146 204.141 21.0771C206.309 20.1201 208.701 19.6416 211.318 19.6416C213.955 19.6416 216.357 20.1201 218.525 21.0771C220.693 22.0146 222.559 23.3916 224.121 25.208C225.684 27.0049 226.885 29.1826 227.725 31.7412C228.584 34.2803 229.014 37.1611 229.014 40.3838ZM221.66 42.7275V40.3252C221.66 37.9424 221.426 35.8428 220.957 34.0264C220.508 32.1904 219.834 30.6572 218.936 29.4268C218.057 28.1768 216.973 27.2393 215.684 26.6143C214.395 25.9697 212.939 25.6475 211.318 25.6475C209.697 25.6475 208.252 25.9697 206.982 26.6143C205.713 27.2393 204.629 28.1768 203.73 29.4268C202.852 30.6572 202.178 32.1904 201.709 34.0264C201.24 35.8428 201.006 37.9424 201.006 40.3252V42.7275C201.006 45.1104 201.24 47.2197 201.709 49.0557C202.178 50.8916 202.861 52.4443 203.76 53.7139C204.678 54.9639 205.771 55.9111 207.041 56.5557C208.311 57.1807 209.756 57.4932 211.377 57.4932C213.018 57.4932 214.473 57.1807 215.742 56.5557C217.012 55.9111 218.086 54.9639 218.965 53.7139C219.844 52.4443 220.508 50.8916 220.957 49.0557C221.426 47.2197 221.66 45.1104 221.66 42.7275ZM263.086 57.0537V62.8838H241.67V57.0537H263.086ZM243.721 20.2275V62.8838H236.367V20.2275H243.721Z"
                                fill="#044971" />
                            <path
                                d="M149.326 40.3838V42.7275C149.326 45.9502 148.906 48.8408 148.066 51.3994C147.227 53.958 146.025 56.1357 144.463 57.9326C142.92 59.7295 141.064 61.1064 138.896 62.0635C136.729 63.001 134.326 63.4697 131.689 63.4697C129.072 63.4697 126.68 63.001 124.512 62.0635C122.363 61.1064 120.498 59.7295 118.916 57.9326C117.334 56.1357 116.104 53.958 115.225 51.3994C114.365 48.8408 113.936 45.9502 113.936 42.7275V40.3838C113.936 37.1611 114.365 34.2803 115.225 31.7412C116.084 29.1826 117.295 27.0049 118.857 25.208C120.439 23.3916 122.305 22.0146 124.453 21.0771C126.621 20.1201 129.014 19.6416 131.631 19.6416C134.268 19.6416 136.67 20.1201 138.838 21.0771C141.006 22.0146 142.871 23.3916 144.434 25.208C145.996 27.0049 147.197 29.1826 148.037 31.7412C148.896 34.2803 149.326 37.1611 149.326 40.3838ZM141.973 42.7275V40.3252C141.973 37.9424 141.738 35.8428 141.27 34.0264C140.82 32.1904 140.146 30.6572 139.248 29.4268C138.369 28.1768 137.285 27.2393 135.996 26.6143C134.707 25.9697 133.252 25.6475 131.631 25.6475C130.01 25.6475 128.564 25.9697 127.295 26.6143C126.025 27.2393 124.941 28.1768 124.043 29.4268C123.164 30.6572 122.49 32.1904 122.021 34.0264C121.553 35.8428 121.318 37.9424 121.318 40.3252V42.7275C121.318 45.1104 121.553 47.2197 122.021 49.0557C122.49 50.8916 123.174 52.4443 124.072 53.7139C124.99 54.9639 126.084 55.9111 127.354 56.5557C128.623 57.1807 130.068 57.4932 131.689 57.4932C133.33 57.4932 134.785 57.1807 136.055 56.5557C137.324 55.9111 138.398 54.9639 139.277 53.7139C140.156 52.4443 140.82 50.8916 141.27 49.0557C141.738 47.2197 141.973 45.1104 141.973 42.7275Z"
                                fill="#FF7313" />
                            <path opacity="0.999" fill-rule="evenodd" clip-rule="evenodd"
                                d="M297.727 21.7383C306.873 21.7109 316.018 21.7383 325.163 21.8203C325.342 21.957 325.52 22.0938 325.699 22.2305C325.877 25.9504 325.842 29.6692 325.592 33.3867C314.946 33.168 304.3 33.168 293.655 33.3867C293.583 33.2773 293.512 33.168 293.44 33.0586C294.619 29.5587 295.798 26.0586 296.977 22.5586C297.126 22.2167 297.377 21.9432 297.727 21.7383Z"
                                fill="#221E1F" />
                            <path opacity="0.999" fill-rule="evenodd" clip-rule="evenodd"
                                d="M333.522 21.7383C342.597 21.7109 351.67 21.7383 360.744 21.8203C361.137 21.9024 361.387 22.0938 361.494 22.3946C362.696 26.0466 363.946 29.6832 365.245 33.3047C354.464 33.1689 343.676 33.1963 332.879 33.3867C332.629 29.7239 332.594 26.0599 332.772 22.3946C332.92 22.091 333.17 21.8722 333.522 21.7383Z"
                                fill="#221E1F" />
                            <path opacity="0.999" fill-rule="evenodd" clip-rule="evenodd"
                                d="M289.797 42.5742C301.514 42.5468 313.231 42.5742 324.949 42.6563C325.255 42.7326 325.505 42.8694 325.699 43.0664C325.877 47.3878 325.842 51.7081 325.592 56.0274C311.794 55.8366 298.005 55.8093 284.224 55.9453C285.801 51.9399 287.337 47.9204 288.832 43.8867C288.99 43.3703 289.312 42.9327 289.797 42.5742Z"
                                fill="#231E1F" />
                            <path opacity="0.998" fill-rule="evenodd" clip-rule="evenodd"
                                d="M333.522 42.5742C345.24 42.5468 356.957 42.5742 368.674 42.6563C368.996 42.7929 369.246 42.9844 369.425 43.2305C370.999 47.4499 372.607 51.6607 374.247 55.8633C360.487 55.8095 346.698 55.8643 332.879 56.0274C332.629 51.7627 332.594 47.4971 332.772 43.2305C332.92 42.927 333.17 42.7081 333.522 42.5742Z"
                                fill="#231E1F" />
                            <path opacity="0.976" fill-rule="evenodd" clip-rule="evenodd"
                                d="M285.296 57.3399C298.514 57.3125 311.731 57.3399 324.949 57.4219C325.342 57.5039 325.592 57.6954 325.699 57.9961C325.842 59.4727 325.842 60.9492 325.699 62.4258C325.52 62.5625 325.342 62.6993 325.163 62.836C311.517 62.9454 297.87 62.9454 284.224 62.836C283.775 62.532 283.561 62.1492 283.581 61.6875C283.791 60.4521 284.041 59.2217 284.331 57.9961C284.63 57.7385 284.952 57.5197 285.296 57.3399Z"
                                fill="#231E20" />
                            <path opacity="0.976" fill-rule="evenodd" clip-rule="evenodd"
                                d="M333.737 57.3399C346.955 57.3125 360.172 57.3399 373.39 57.4219C374.008 57.6826 374.329 58.0927 374.355 58.6524C374.68 59.9022 374.823 61.1601 374.783 62.4258C374.605 62.5625 374.426 62.6993 374.247 62.836C360.601 62.9454 346.955 62.9454 333.308 62.836C333.13 62.6993 332.951 62.5625 332.772 62.4258C332.629 60.9492 332.629 59.4727 332.772 57.9961C333.04 57.7184 333.362 57.4995 333.737 57.3399Z"
                                fill="#231E20" />
                        </svg>
        </a>
    );
}