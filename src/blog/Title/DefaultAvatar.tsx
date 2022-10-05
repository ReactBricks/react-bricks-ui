import React from 'react'

interface DefaultAvatarProps {
  className: string
}

const DefaultAvatar: React.FC<DefaultAvatarProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1249.24 1249.24"
      {...{ className }}
    >
      <defs>
        <linearGradient
          id="a"
          x1="412.94"
          y1="1046.05"
          x2="847.4"
          y2="1046.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#a1a1a1" />
          <stop offset="0.06" stopColor="#b2b2b2" />
          <stop offset="0.19" stopColor="#d4d4d4" />
          <stop offset="0.31" stopColor="#ececec" />
          <stop offset="0.43" stopColor="#fafafa" />
          <stop offset="0.52" stopColor="#fff" />
          <stop offset="0.64" stopColor="#fcfcfb" />
          <stop offset="0.75" stopColor="#f1f1f1" />
          <stop offset="0.86" stopColor="#dfdfde" />
          <stop offset="0.96" stopColor="#c6c6c5" />
          <stop offset="1" stopColor="#babab9" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="636.17"
          y1="1275.38"
          x2="636.17"
          y2="824.19"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.24" stopColor="#fbfbfb" />
          <stop offset="0.48" stopColor="#f0f0ef" />
          <stop offset="0.71" stopColor="#dcdcdc" />
          <stop offset="0.95" stopColor="#c1c1c0" />
          <stop offset="1" stopColor="#babab9" />
        </linearGradient>
      </defs>
      <title>Risorsa 1</title>
      <rect width="1249.24" height="1248.73" fill="#dbdbdb" />
      <path
        d="M847.4,1127.71c-143.89-51-289.4-49.27-434.46,0V991.51c146-37.36,290.76-34.92,434.46,0Z"
        fill="url(#a)"
      />
      <path
        d="M786.3,875.53c-10.86-.06,8.71,138,18.76,171.11,22.91,75.51,303.29,139.44,305.36,189.53.54,13.06,0,13.07,0,13.07H161.68l88.34-85,67.22-17.43L353,1130a110.24,110.24,0,0,0,19.46-11.81l73.47-55.77S469,1033.57,467,990s-1.92-114.47-1.92-114.47Z"
        fill="url(#b)"
      />
      <path
        d="M404.6,662.83s-50.28-93.71-59.12-108.28,6.63-64.51,0-74.92-8.84-162.33,44.2-208.12,84-58.27,84-58.27c13.13-11.33,100.51-43.25,137.24-37.47,110.46,17.39,92.08,11.69,112.48,10.41,46.89,7.56,82.71,20.19,77.16,50.92,17.67-9.09,31.7-9.19,46.59,1.11-4.11,8.69-4.63,14.4,0,18.73,0,0,57.45,2.08,57.45,145.69,0,138.25-10.72,187.72-26.51,195.63s-44.91,36-44.91,36S840.49,384,769.77,386s-122.54,37.61-293.91,0C438.29,377.73,384.71,612.88,404.6,662.83Z"
        fill="#a8a8a8"
      />
      <path
        d="M398.81,750.84s30.46,149.29,107,195.63c119.55,72.36,201.63,11,201.63,11s95.38-85.48,111-135.86c14-45,18.88-70.76,18.88-70.76s12.59,0,21-10.41,10.5-77,16.79-95.73,10.49-50-10.49-47.87-31.48,37.46-31.48,37.46,19.05-62.95,6.46-100.41-4.36-116-54.72-147.26-114.48-20.81-145.36-10.4-95.94,4.16-135.8-10.41-84.42,51.68-90.72,82.9-16.3,160.6-14.2,185.58l2.1,25s-14.69-66.6-27.28-70.76-35.67-4.16-31.47,45.79,9.29,11.28,27.28,104.06C379.93,792.46,398.81,750.84,398.81,750.84Z"
        fill="#f4f4f4"
      />
      <path
        d="M412.7,992.51s-18.3,107.61-30,110.64,130,72.81,182.08,79.52c0,0,31.3-54.17,66.37-70.55C631.14,1112.12,419.92,1040.45,412.7,992.51Z"
        fill="#fff"
      />
      <path
        d="M847.79,991.51s19.23,107.4,30.85,110.31-127.76,74.2-179.2,81.48c0,0-31.53-53.84-66.37-69.84C633.07,1113.46,841.15,1039.52,847.79,991.51Z"
        fill="#fff"
      />
    </svg>
  )
}

export default DefaultAvatar
