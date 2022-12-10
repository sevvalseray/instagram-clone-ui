import Svg, { Circle, Rect, Path, Mask } from 'react-native-svg';

function Logo({ size, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 104 30" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.34906 0.103386C3.22375 1.01086 0.881358 3.5683 0.144313 6.78057C-0.789613 10.8488 3.10259 12.5709 3.42568 12.0089C3.7942 11.3437 2.72397 11.1169 2.50185 9.00802C2.2141 6.28043 3.46606 3.23316 5.03607 1.89772C5.32887 1.65022 5.31372 1.99568 5.31372 2.63504C5.31372 3.7797 5.25314 14.0456 5.25314 16.1853C5.25314 19.0831 5.13703 20.0009 4.92501 20.9032C4.70793 21.821 4.36465 22.4397 4.62716 22.6769C4.91996 22.945 6.16688 22.3108 6.88373 21.2848C7.74698 20.0576 8.04987 18.5829 8.10541 16.9845C8.17103 15.051 8.16599 11.9934 8.17103 10.2455C8.17103 8.64193 8.19627 3.95501 8.14579 1.13461C8.1256 0.448846 6.2426 -0.273011 5.34906 0.103386ZM103.522 15.3294C103.214 15.3294 103.073 15.6543 102.957 16.1957C102.553 18.088 102.129 18.5159 101.579 18.5159C100.968 18.5159 100.418 17.5775 100.276 15.7007C100.165 14.226 100.18 11.5087 100.322 8.80693C100.352 8.25007 100.201 7.70352 98.7367 7.16212C98.1056 6.9301 97.1868 6.58464 96.7325 7.70867C95.4452 10.8694 94.9404 13.3804 94.8192 14.4013C94.8142 14.4529 94.7485 14.4632 94.7384 14.3446C94.6627 13.5248 94.4961 12.0398 94.4709 8.92036C94.4658 8.31194 94.3396 7.79117 93.6783 7.36837C93.2492 7.09509 91.9468 6.60526 91.4773 7.1879C91.0734 7.66227 90.5989 8.93583 90.1092 10.4466C89.7104 11.6737 89.4378 12.5039 89.4378 12.5039C89.4378 12.5039 89.4428 9.18848 89.4479 7.93554C89.4479 7.46118 89.1298 7.3065 89.0339 7.27556C88.5998 7.14666 87.7416 6.93525 87.3781 6.93525C86.9288 6.93525 86.8228 7.1879 86.8228 7.55915C86.8228 7.60555 86.7521 11.9212 86.7521 14.9376V15.3655C86.5047 16.7525 85.7021 18.6345 84.8287 18.6345C83.9503 18.6345 83.5414 17.8508 83.5414 14.2518C83.5414 12.1533 83.602 11.2406 83.6323 9.72472C83.6474 8.85333 83.6828 8.17788 83.6828 8.02835C83.6777 7.55915 82.8801 7.32712 82.5116 7.23947C82.138 7.15181 81.8149 7.11572 81.5625 7.13119C81.2041 7.15181 80.9517 7.38899 80.9517 7.71899C80.9517 7.89429 80.9517 8.22944 80.9517 8.22944C80.4923 7.49727 79.7552 6.98682 79.2605 6.83729C77.9379 6.44027 76.5546 6.79088 75.5097 8.27585C74.6817 9.45144 74.182 10.7869 73.9851 12.705C73.8387 14.1074 73.8892 15.5305 74.1416 16.7319C73.8336 18.088 73.2581 18.6448 72.6321 18.6448C71.7235 18.6448 71.0621 17.1341 71.1379 14.5199C71.1883 12.8029 71.5266 11.5964 71.8951 9.84847C72.0516 9.10598 71.9254 8.71412 71.6023 8.34288C71.3095 8.00257 70.6785 7.82726 69.7748 8.03867C69.1337 8.19335 68.2099 8.35835 67.3719 8.48209C67.3719 8.48209 67.4224 8.27585 67.4627 7.91492C67.6798 6.01231 65.6454 6.16699 64.9941 6.77541C64.6054 7.1415 64.3429 7.56946 64.242 8.33772C64.0855 9.55972 65.0648 10.1372 65.0648 10.1372C64.7417 11.6325 63.9542 13.5867 63.1414 14.9994C62.7073 15.7574 62.3691 16.3194 61.94 16.9124C61.94 16.6906 61.94 16.4689 61.9349 16.2472C61.9248 13.102 61.9652 10.627 61.9854 9.73503C62.0005 8.86365 62.0359 8.20882 62.0359 8.05413C62.0308 7.71383 61.8339 7.58493 61.425 7.41993C61.0616 7.27556 60.6375 7.17759 60.1933 7.1415C59.638 7.09509 59.2997 7.39931 59.3098 7.75508C59.3098 7.82211 59.3098 8.2346 59.3098 8.2346C58.8504 7.50243 58.1134 6.99197 57.6187 6.84244C56.296 6.44542 54.9128 6.79604 53.8678 8.281C53.0399 9.4566 52.4997 11.1117 52.3432 12.6946C52.2019 14.1693 52.2271 15.4222 52.424 16.4792C52.212 17.5363 51.6062 18.6448 50.9247 18.6448C50.0513 18.6448 49.5515 17.8611 49.5515 14.2621C49.5515 12.1636 49.6121 11.2509 49.6424 9.73503C49.6626 8.86365 49.6929 8.18819 49.6929 8.03867C49.6879 7.56946 48.8902 7.33743 48.5217 7.24978C48.133 7.15697 47.7998 7.12603 47.5423 7.14666C47.2041 7.17244 46.9668 7.4818 46.9668 7.70867V8.23975C46.5075 7.50758 45.7654 6.99713 45.2757 6.8476C43.953 6.45058 42.5799 6.81151 41.5299 8.28616C40.8433 9.25036 40.288 10.3177 40.0053 12.6792C39.9195 13.3598 39.8841 13.9991 39.8892 14.5973C39.6166 16.2988 38.4101 18.253 37.4256 18.253C36.8501 18.253 36.2999 17.1134 36.2999 14.6901C36.2999 11.4572 36.4968 6.85791 36.5321 6.41449C36.5321 6.41449 37.779 6.39386 38.0213 6.38871C38.6423 6.38355 39.2077 6.39902 40.0356 6.35261C40.4495 6.33199 40.8484 4.81609 40.4243 4.63047C40.2274 4.54281 38.8543 4.47063 38.3091 4.46031C37.8749 4.43453 36.5977 4.33657 36.5977 4.33657C36.5977 4.33657 36.7138 1.28414 36.7391 0.959303C36.7593 0.691184 36.416 0.551969 36.2242 0.469471C35.7446 0.263226 35.3205 0.165259 34.8157 0.0621369C34.114 -0.0873908 33.801 0.0569808 33.7354 0.660248C33.6395 1.56773 33.594 4.2386 33.594 4.2386C33.0791 4.2386 31.3274 4.13548 30.8175 4.13548C30.3379 4.13548 29.828 6.21855 30.4843 6.24433C31.2415 6.27527 32.5642 6.30105 33.4426 6.32683C33.4426 6.32683 33.4022 11.0034 33.4022 12.4472C33.4022 12.5967 33.4022 12.7462 33.4022 12.8906C32.9226 15.448 31.2213 16.8247 31.2213 16.8247C31.5848 15.1335 30.8427 13.8651 29.4999 12.7926C29.0052 12.3956 28.0309 11.648 26.9354 10.823C26.9354 10.823 27.5664 10.1888 28.1318 8.91521C28.5306 8.01289 28.5458 6.9765 27.5715 6.74963C25.9611 6.37324 24.6283 7.57461 24.2346 8.86365C23.9266 9.85878 24.0932 10.5961 24.694 11.3644C24.7343 11.4211 24.7848 11.4778 24.8353 11.5345C24.4718 12.2512 23.9721 13.2103 23.548 13.9527C22.3718 16.0204 21.4833 17.6548 20.8119 17.6548C20.2767 17.6548 20.2818 15.9946 20.2818 14.4426C20.2818 13.102 20.3777 11.0911 20.4585 9.00286C20.4837 8.31194 20.1455 7.92007 19.575 7.5643C19.2318 7.34774 18.4947 6.91979 18.0656 6.91979C17.4245 6.91979 15.5819 7.00744 13.8402 12.1326C13.6231 12.7771 13.189 13.9579 13.189 13.9579L13.2243 7.79633C13.2243 7.65196 13.1486 7.51274 12.977 7.41477C12.6842 7.24978 11.8966 6.91979 11.2 6.91979C10.8668 6.91979 10.7002 7.07963 10.7002 7.39415L10.6396 17.0361C10.6396 17.7683 10.6598 18.6242 10.7305 18.9954C10.8012 19.3667 10.9173 19.676 11.0586 19.8565C11.2 20.037 11.3666 20.1762 11.6341 20.2329C11.8865 20.2845 13.2698 20.4649 13.3404 19.9287C13.4263 19.2842 13.4313 18.5881 14.1583 15.9946C15.2891 11.9522 16.7632 9.98253 17.4548 9.28129C17.5759 9.15755 17.7173 9.15239 17.7072 9.35348C17.6769 10.2403 17.5759 12.4575 17.5052 14.3343C17.3185 19.3667 18.2171 20.2999 19.5044 20.2999C20.4888 20.2999 21.877 19.3048 23.3663 16.7886C24.2951 15.2212 25.1937 13.6795 25.845 12.5709C26.2943 12.9937 26.8041 13.4526 27.309 13.9373C28.4852 15.0716 28.8689 16.1493 28.6164 17.1702C28.4196 17.9539 27.6825 18.7583 26.37 17.9745C25.9863 17.7477 25.8248 17.5723 25.4411 17.3094C25.2341 17.1702 24.9161 17.1289 24.7293 17.2784C24.2396 17.6548 23.9569 18.1344 23.7954 18.7273C23.6389 19.3048 24.2093 19.609 24.7949 19.8771C25.3048 20.1092 26.3952 20.3154 27.0919 20.3412C29.8028 20.434 31.9735 19.0109 33.488 15.3397C33.7606 18.5108 34.9116 20.3051 36.9107 20.3051C38.2485 20.3051 39.5913 18.5469 40.1769 16.8195C40.3435 17.5259 40.596 18.1395 40.914 18.6551C42.4588 21.1404 45.4473 20.6041 46.9517 18.4953C47.4161 17.8456 47.4868 17.6084 47.4868 17.6084C47.7039 19.5987 49.284 20.2948 50.1876 20.2948C51.1973 20.2948 52.2423 19.8101 52.9743 18.1344C53.0601 18.3148 53.156 18.4901 53.257 18.6551C54.7967 21.1404 57.7903 20.6041 59.2896 18.4953C59.3603 18.3973 59.4209 18.3097 59.4764 18.2272L59.5218 19.5368C59.5218 19.5368 58.6636 20.336 58.1386 20.8259C55.8215 22.9863 54.0596 24.6259 53.9284 26.5337C53.7618 28.9674 55.7054 29.8697 57.1744 29.9883C58.7343 30.112 60.0721 29.2407 60.8899 28.0135C61.6118 26.9359 62.0864 24.6105 62.051 22.3211C62.0359 21.4033 62.0157 20.2381 61.9955 18.9851C62.8083 18.0261 63.727 16.8092 64.5701 15.3913C65.4889 13.8393 66.4783 11.7614 66.9832 10.1424C66.9832 10.1424 67.8414 10.1475 68.7551 10.0908C69.0479 10.0753 69.1287 10.1321 69.0782 10.3486C69.0126 10.6116 67.9221 14.886 68.9166 17.7322C69.5982 19.6812 71.1328 20.3102 72.0415 20.3102C73.1067 20.3102 74.1264 19.4956 74.6716 18.2787C74.7373 18.4128 74.8079 18.5417 74.8837 18.6654C76.4234 21.1507 79.4069 20.6093 80.9214 18.5056C81.2647 18.0312 81.4565 17.6187 81.4565 17.6187C81.7796 19.6812 83.3597 20.3154 84.2633 20.3154C85.2023 20.3154 86.0958 19.9235 86.8228 18.1808C86.8531 18.949 86.9035 19.5781 86.9742 19.774C87.0197 19.8926 87.2872 20.0473 87.4841 20.1195C88.3474 20.4443 89.2207 20.2896 89.5488 20.2226C89.776 20.1762 89.9476 19.9906 89.9729 19.5214C90.0335 18.2787 89.9981 16.1853 90.3667 14.6334C90.9876 12.0244 91.5681 11.0138 91.8458 10.5136C91.9972 10.2352 92.1739 10.1888 92.179 10.4827C92.1941 11.0859 92.2244 12.8442 92.4617 15.216C92.6384 16.9588 92.8756 17.99 93.0574 18.3148C93.5773 19.2481 94.2185 19.2893 94.7384 19.2893C95.0716 19.2893 95.7632 19.1965 95.7027 18.6036C95.6724 18.3148 95.7279 16.5308 96.3387 13.9579C96.7426 12.2822 97.409 10.7663 97.6513 10.2146C97.7421 10.0083 97.7825 10.1733 97.7825 10.2042C97.7321 11.3592 97.6159 15.1335 98.0804 17.2011C98.7064 20.0009 100.524 20.3102 101.155 20.3102C102.503 20.3102 103.608 19.2687 103.982 16.5205C104.052 15.845 103.921 15.3294 103.522 15.3294ZM46.9668 13.6331C46.8911 15.0871 46.6084 16.3039 46.1642 17.1856C45.3514 18.784 43.7511 19.2893 43.0443 16.9794C42.5345 15.314 42.7061 13.0453 42.9181 11.8181C43.2311 9.99799 44.0187 8.70896 45.2504 8.83271C46.5175 8.96161 47.1284 10.6116 46.9668 13.6331ZM59.3098 13.6537C59.2391 15.0252 58.8858 16.4071 58.5071 17.1856C57.7196 18.7943 56.0688 19.2996 55.3873 16.9794C54.9229 15.3965 55.0339 13.3495 55.2611 12.0604C55.559 10.3847 56.2859 8.83271 57.5934 8.83271C58.8656 8.83271 59.4916 10.2506 59.3098 13.6537ZM59.6329 23.0224C59.6178 25.5282 59.229 27.7196 58.3961 28.359C57.2148 29.2613 55.6296 28.5858 55.9578 26.7606C56.2506 25.1415 57.6186 23.4916 59.6329 21.4755C59.638 21.4704 59.638 21.9293 59.6329 23.0224ZM80.9365 13.6692C80.8659 15.1747 80.5377 16.3555 80.1339 17.1856C79.3463 18.7943 77.7056 19.2945 77.014 16.9794C76.6354 15.7213 76.6203 13.6124 76.8929 11.8542C77.1705 10.065 77.9429 8.70896 79.2252 8.83271C80.4822 8.95646 81.0728 10.6116 80.9365 13.6692Z"
            />
        </Svg>
    )
}

function Home({ size, fill, stroke, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10.3095 25.8899H5.5C4.94772 25.8899 4.5 25.4422 4.5 24.8899V16.0831C4.5 15.8284 4.59721 15.5832 4.7718 15.3977L13.8988 5.70032C14.2936 5.2808 14.9603 5.2808 15.3552 5.70032L24.3076 15.2122C24.4822 15.3977 24.5794 15.6429 24.5794 15.8976V24.8899C24.5794 25.4422 24.1317 25.8899 23.5794 25.8899H18.5952C18.043 25.8899 17.5952 25.4422 17.5952 24.8899V19.9534C17.5952 19.9534 17.5952 17.1707 14.627 17.1707C11.1349 17.1707 11.3095 19.9534 11.3095 19.9534V24.8899C11.3095 25.4422 10.8618 25.8899 10.3095 25.8899Z" fill={fill} stroke={stroke} strokeWidth="2" />
        </Svg>

    )
}

function Search({ size, fill, stroke, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M20.1691 12.7612C20.1691 17.0881 16.6615 20.5957 12.3346 20.5957C8.00765 20.5957 4.5 17.0881 4.5 12.7612C4.5 8.43426 8.00765 4.92661 12.3346 4.92661C16.6615 4.92661 20.1691 8.43426 20.1691 12.7612ZM18.5457 20.3865C16.8523 21.7676 14.6901 22.5957 12.3346 22.5957C6.90308 22.5957 2.5 18.1926 2.5 12.7612C2.5 7.32969 6.90308 2.92661 12.3346 2.92661C17.766 2.92661 22.1691 7.32969 22.1691 12.7612C22.1691 15.1167 21.341 17.2789 19.9599 18.9723L25.2434 24.2558C25.634 24.6464 25.634 25.2795 25.2434 25.67C24.8529 26.0606 24.2198 26.0606 23.8292 25.67L18.5457 20.3865Z" fill={fill} stroke={stroke} strokeWidth="2" />
        </Svg>
    )
}

function Reels({ size, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
            <Rect x="4.5" y="4.92661" width="20" height="20" rx="6" stroke="black" stroke-width="2" />
            <Path d="M5.24609 10.0377H12.5794H23.754M18.6905 9.51394L17.4683 7.4187L16.4207 5.67267M12.4048 9.68854L11.1826 7.5933L10.135 5.84727" stroke="black" stroke-width="2" stroke-linecap="square" />
            <Path d="M12.0961 14.6735C12.1137 13.9247 12.918 13.4603 13.5753 13.8195L18.1153 16.3C18.8001 16.6741 18.8116 17.6534 18.1359 18.0436L13.474 20.7351C12.7982 21.1253 11.9559 20.6256 11.9743 19.8455L12.0961 14.6735Z" fill="black" />
        </Svg>

    )
}

function ReelsFilled({ size, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
            <Mask id="path-1-inside-1_671_354" fill="white">
                <Path fillRule="evenodd" clipRule="evenodd" d="M7.89844 0.539825H11.6329L11.7068 0.664464L14.0048 4.53885L14.6535 5.65095H10.5813L9.44654 3.70559L7.63171 0.544813C7.72021 0.541498 7.80913 0.539825 7.89844 0.539825ZM1.15625 5.65095C1.76946 3.45758 3.42421 1.69904 5.55365 0.942198L7.71382 4.70444L7.7138 4.70445L7.71726 4.71038L8.26593 5.65095H1.15625ZM0.898438 15.5398V7.65095H9.4326L9.44335 7.6694L9.47497 7.65095H9.97787H22.8984V15.5398C22.8984 19.4058 19.7644 22.5398 15.8984 22.5398H7.89844C4.03244 22.5398 0.898438 19.4058 0.898438 15.5398ZM15.8984 0.539825C19.1099 0.539825 21.8163 2.70252 22.6406 5.65095H16.9689L16.9528 5.62327L15.7305 3.52804L15.7306 3.52802L15.7268 3.52177L13.9582 0.539825H15.8984ZM10.9737 10.4327C10.3164 10.0735 9.51217 10.5379 9.49454 11.2867L9.37272 16.4588C9.35434 17.2388 10.1967 17.7385 10.8724 17.3483L15.5343 14.6568C16.2101 14.2666 16.1985 13.2873 15.5138 12.9132L10.9737 10.4327Z" />
            </Mask>
            <Path fillRule="evenodd" clipRule="evenodd" d="M7.89844 0.539825H11.6329L11.7068 0.664464L14.0048 4.53885L14.6535 5.65095H10.5813L9.44654 3.70559L7.63171 0.544813C7.72021 0.541498 7.80913 0.539825 7.89844 0.539825ZM1.15625 5.65095C1.76946 3.45758 3.42421 1.69904 5.55365 0.942198L7.71382 4.70444L7.7138 4.70445L7.71726 4.71038L8.26593 5.65095H1.15625ZM0.898438 15.5398V7.65095H9.4326L9.44335 7.6694L9.47497 7.65095H9.97787H22.8984V15.5398C22.8984 19.4058 19.7644 22.5398 15.8984 22.5398H7.89844C4.03244 22.5398 0.898438 19.4058 0.898438 15.5398ZM15.8984 0.539825C19.1099 0.539825 21.8163 2.70252 22.6406 5.65095H16.9689L16.9528 5.62327L15.7305 3.52804L15.7306 3.52802L15.7268 3.52177L13.9582 0.539825H15.8984ZM10.9737 10.4327C10.3164 10.0735 9.51217 10.5379 9.49454 11.2867L9.37272 16.4588C9.35434 17.2388 10.1967 17.7385 10.8724 17.3483L15.5343 14.6568C16.2101 14.2666 16.1985 13.2873 15.5138 12.9132L10.9737 10.4327Z" fill="black" />
            <Path d="M11.6329 0.539825L13.3531 -0.480447L12.772 -1.46017H11.6329V0.539825ZM11.7068 0.664464L9.98661 1.68474V1.68474L11.7068 0.664464ZM14.0048 4.53885L15.7323 3.53111L15.7287 3.52483L15.725 3.51857L14.0048 4.53885ZM14.6535 5.65095V7.65095H18.1356L16.3811 4.64321L14.6535 5.65095ZM10.5813 5.65095L8.85378 6.6587L9.4326 7.65095H10.5813V5.65095ZM9.44654 3.70559L7.71207 4.70147L7.71898 4.71333L9.44654 3.70559ZM7.63171 0.544813L7.55684 -1.45378L4.2491 -1.32987L5.89728 1.54067L7.63171 0.544813ZM5.55365 0.942198L7.28809 -0.0536635L6.45685 -1.50138L4.88386 -0.942314L5.55365 0.942198ZM1.15625 5.65095L-0.769894 5.11246L-1.47959 7.65095H1.15625V5.65095ZM7.71382 4.70444L8.73679 6.42303L10.4286 5.41599L9.44826 3.70858L7.71382 4.70444ZM7.7138 4.70445L6.69083 2.98587L4.98743 3.9998L5.98621 5.71213L7.7138 4.70445ZM7.71726 4.71038L5.98967 5.71806L5.9897 5.71812L7.71726 4.71038ZM8.26593 5.65095V7.65095H11.748L9.99349 4.64321L8.26593 5.65095ZM0.898438 7.65095V5.65095H-1.10156V7.65095H0.898438ZM9.4326 7.65095L11.1602 6.64324L10.5814 5.65095H9.4326V7.65095ZM9.44335 7.6694L7.71578 8.67712L8.72352 10.4047L10.4511 9.39695L9.44335 7.6694ZM9.47497 7.65095V5.65095H8.93427L8.46722 5.9234L9.47497 7.65095ZM22.8984 7.65095H24.8984V5.65095H22.8984V7.65095ZM22.6406 5.65095V7.65095H25.2765L24.5668 5.11246L22.6406 5.65095ZM16.9689 5.65095L15.2414 6.65873L15.8202 7.65095H16.9689V5.65095ZM16.9528 5.62327L15.2252 6.63102L15.2252 6.63105L16.9528 5.62327ZM15.7305 3.52804L14.7228 1.80048L12.9952 2.80822L14.003 4.53578L15.7305 3.52804ZM15.7306 3.52802L16.7383 5.25558L18.4784 4.24052L17.4508 2.50781L15.7306 3.52802ZM15.7268 3.52177L17.4471 2.50156L17.447 2.5015L15.7268 3.52177ZM13.9582 0.539825V-1.46017H10.4466L12.238 1.5601L13.9582 0.539825ZM9.49454 11.2867L11.494 11.3338V11.3338L9.49454 11.2867ZM10.9737 10.4327L11.9327 8.67755L11.9327 8.67755L10.9737 10.4327ZM9.37272 16.4588L7.37327 16.4117L9.37272 16.4588ZM10.8724 17.3483L9.87244 15.6163L9.87244 15.6163L10.8724 17.3483ZM15.5343 14.6568L14.5343 12.9247H14.5343L15.5343 14.6568ZM15.5138 12.9132L16.4727 11.1581L15.5138 12.9132ZM11.6329 -1.46017H7.89844V2.53983H11.6329V-1.46017ZM13.427 -0.355808L13.3531 -0.480447L9.91269 1.5601L9.98661 1.68474L13.427 -0.355808ZM15.725 3.51857L13.427 -0.355809L9.98661 1.68474L12.2846 5.55912L15.725 3.51857ZM16.3811 4.64321L15.7323 3.53111L12.2772 5.54659L12.9259 6.6587L16.3811 4.64321ZM10.5813 7.65095H14.6535V3.65095H10.5813V7.65095ZM7.71898 4.71333L8.85378 6.6587L12.3089 4.64321L11.1741 2.69785L7.71898 4.71333ZM5.89728 1.54067L7.71211 4.70145L11.181 2.70973L9.36615 -0.451048L5.89728 1.54067ZM7.89844 -1.46017C7.78416 -1.46017 7.67028 -1.45803 7.55684 -1.45378L7.70659 2.54341C7.77015 2.54103 7.8341 2.53983 7.89844 2.53983V-1.46017ZM4.88386 -0.942314C2.1454 0.0309867 0.0194349 2.28912 -0.769894 5.11246L3.08239 6.18945C3.51948 4.62604 4.70303 3.36709 6.22344 2.82671L4.88386 -0.942314ZM9.44826 3.70858L7.28809 -0.0536635L3.81922 1.93806L5.97939 5.7003L9.44826 3.70858ZM8.73677 6.42304L8.73679 6.42303L6.69085 2.98586L6.69083 2.98587L8.73677 6.42304ZM9.44485 3.7027L9.4414 3.69677L5.98621 5.71213L5.98967 5.71806L9.44485 3.7027ZM9.99349 4.64321L9.44482 3.70264L5.9897 5.71812L6.53837 6.6587L9.99349 4.64321ZM1.15625 7.65095H8.26593V3.65095H1.15625V7.65095ZM-1.10156 7.65095V15.5398H2.89844V7.65095H-1.10156ZM9.4326 5.65095H0.898438V9.65096H9.4326V5.65095ZM11.1709 6.66168L11.1602 6.64324L7.70502 8.65867L7.71578 8.67712L11.1709 6.66168ZM8.46722 5.9234L8.4356 5.94185L10.4511 9.39695L10.4827 9.37851L8.46722 5.9234ZM9.97787 5.65095H9.47497V9.65096H9.97787V5.65095ZM22.8984 5.65095H9.97787V9.65096H22.8984V5.65095ZM24.8984 15.5398V7.65095H20.8984V15.5398H24.8984ZM15.8984 24.5398C20.869 24.5398 24.8984 20.5104 24.8984 15.5398H20.8984C20.8984 18.3012 18.6599 20.5398 15.8984 20.5398V24.5398ZM7.89844 24.5398H15.8984V20.5398H7.89844V24.5398ZM-1.10156 15.5398C-1.10156 20.5104 2.92787 24.5398 7.89844 24.5398V20.5398C5.13701 20.5398 2.89844 18.3012 2.89844 15.5398H-1.10156ZM24.5668 5.11246C23.5072 1.32259 20.0304 -1.46017 15.8984 -1.46017V2.53983C18.1895 2.53983 20.1254 4.08245 20.7145 6.18945L24.5668 5.11246ZM16.9689 7.65095H22.6406V3.65095H16.9689V7.65095ZM15.2252 6.63105L15.2414 6.65873L18.6964 4.64318L18.6803 4.6155L15.2252 6.63105ZM14.003 4.53578L15.2252 6.63102L18.6803 4.61553L17.4581 2.52029L14.003 4.53578ZM14.7228 1.80046L14.7228 1.80048L16.7383 5.25559L16.7383 5.25558L14.7228 1.80046ZM14.0066 4.54198L14.0103 4.54823L17.4508 2.50781L17.4471 2.50156L14.0066 4.54198ZM12.238 1.5601L14.0067 4.54204L17.447 2.5015L15.6784 -0.480447L12.238 1.5601ZM15.8984 -1.46017H13.9582V2.53983H15.8984V-1.46017ZM11.494 11.3338C11.4763 12.0826 10.6721 12.5469 10.0148 12.1878L11.9327 8.67755C9.96077 7.60018 7.548 8.99319 7.49509 11.2396L11.494 11.3338ZM11.3722 16.5058L11.494 11.3338L7.49509 11.2396L7.37327 16.4117L11.3722 16.5058ZM9.87244 15.6163C10.5482 15.2261 11.3905 15.7258 11.3722 16.5058L7.37327 16.4117C7.31815 18.7519 9.84515 20.2508 11.8724 19.0804L9.87244 15.6163ZM14.5343 12.9247L9.87244 15.6163L11.8724 19.0804L16.5343 16.3888L14.5343 12.9247ZM14.5548 14.6683C13.8701 14.2942 13.8585 13.3149 14.5343 12.9247L16.5343 16.3888C18.5616 15.2184 18.527 12.2805 16.4727 11.1581L14.5548 14.6683ZM10.0148 12.1878L14.5548 14.6683L16.4727 11.1581L11.9327 8.67755L10.0148 12.1878Z" fill="black" mask="url(#path-1-inside-1_671_354)" />
        </Svg>
    )
}

function Shop({ size, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 23 25" xmlns="http://www.w3.org/2000/svg">
            <Path d="M2.34203 9.75104C2.435 8.1651 3.74822 6.92661 5.33689 6.92661H17.663C19.2516 6.92661 20.5649 8.1651 20.6578 9.75104L21.1293 17.7926C21.2976 20.6641 19.0143 23.0852 16.1378 23.0852H6.86203C3.98557 23.0852 1.70227 20.6641 1.87061 17.7926L2.34203 9.75104Z" stroke="black" stroke-width="2" />
            <Path d="M7.8335 6.81546V5.06944C7.8335 3.3337 9.39694 1.92661 11.3255 1.92661C13.2541 1.92661 14.8176 3.3337 14.8176 5.06944V6.81546" stroke="black" stroke-width="2" />
            <Path d="M8.00781 10.3074C8.00781 10.3074 8.0078 13.974 11.3253 13.974C14.9919 13.974 14.9919 10.3074 14.9919 10.3074" stroke="black" stroke-width="2" stroke-linecap="round" />
        </Svg>


    )
}

function ShopFilled({ size, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.23193 6.19684V4.45082C7.23193 2.71508 8.79537 1.30798 10.724 1.30798C12.6526 1.30798 14.216 2.71508 14.216 4.45082V6.19684" stroke="black" stroke-width="2" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M4.73531 5.30798C2.6171 5.30798 0.866131 6.95931 0.742169 9.07389L0.270749 17.1155C0.0687436 20.5613 2.8087 23.4666 6.26046 23.4666H15.5363C18.988 23.4666 21.728 20.5613 21.526 17.1155L21.0546 9.07389C20.9306 6.95931 19.1796 5.30798 17.0614 5.30798H4.73531ZM7.40624 8.68878C7.95707 8.68878 8.40388 9.13414 8.40623 9.68442L8.40623 9.68471L8.4066 9.69982C8.40708 9.716 8.40819 9.74391 8.41064 9.78184C8.41556 9.85804 8.4258 9.9727 8.44689 10.1126C8.48984 10.3974 8.57388 10.7604 8.73202 11.1099C8.88951 11.4581 9.10584 11.7615 9.39898 11.9775C9.68072 12.1851 10.0912 12.3554 10.7237 12.3554C11.4654 12.3554 11.9551 12.1729 12.2888 11.9505C12.6286 11.7239 12.8677 11.4146 13.0376 11.0749C13.2094 10.7313 13.3003 10.3756 13.3466 10.0973C13.3694 9.96054 13.3804 9.84876 13.3857 9.77509C13.3883 9.73842 13.3895 9.71171 13.39 9.69665L13.3903 9.6833C13.3933 9.13354 13.8399 8.68878 14.3903 8.68878C14.9426 8.68878 15.3903 9.1365 15.3903 9.68878H14.3903C15.3903 9.68878 15.3903 9.68928 15.3903 9.6898L15.3903 9.69091L15.3903 9.69339L15.3903 9.69938L15.3901 9.71543C15.3899 9.72791 15.3895 9.74394 15.3889 9.76327C15.3876 9.80192 15.3852 9.85399 15.3806 9.91758C15.3716 10.0444 15.3539 10.2191 15.3194 10.4261C15.2512 10.8353 15.1129 11.3963 14.8264 11.9693C14.5379 12.5463 14.0895 13.1537 13.3982 13.6146C12.7005 14.0796 11.8153 14.3554 10.7237 14.3554C9.69746 14.3554 8.86387 14.0675 8.21258 13.5876C7.57269 13.1161 7.16699 12.5028 6.90981 11.9343C6.65327 11.3672 6.52997 10.8135 6.46925 10.4108C6.43851 10.2069 6.42283 10.0351 6.4148 9.91082C6.41077 9.8485 6.40864 9.79763 6.4075 9.7601C6.40694 9.74132 6.40662 9.72584 6.40645 9.71389L6.40628 9.69862L6.40625 9.69301L6.40624 9.69072L6.40624 9.68971C6.40624 9.68923 6.40624 9.68878 7.40624 9.68878L6.40624 9.68878C6.40624 9.13649 6.85396 8.68878 7.40624 8.68878Z" fill="black" />
        </Svg>
    )
}

export {
    Logo,
    Home,
    Search,
    Reels,
    ReelsFilled,
    Shop,
    ShopFilled
}