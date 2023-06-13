"use client"
import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
  } from "next-share";

const ShareLink = ({id,description}) => {
  return (
    <div className="flex items-center justify-center mt-5 gap-4">
    <FacebookShareButton
      url={`http://192.168.246.199:3000/blog/${id}`}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <TelegramShareButton
      url={`http://192.168.246.199:3000/blog/${id}`}
      title={description}
    >
      <TelegramIcon size={32} round />
    </TelegramShareButton>
    <TwitterShareButton
      url={`http://192.168.246.199:3000/blog/${id}`}
      title={description}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <WhatsappShareButton
      url={`http://192.168.246.199:3000/blog/${id}`}
      title={description}
      separator=":: "
    >
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
    <LinkedinShareButton
    url={`http://192.168.246.199:3000/blog/${id}`}
    >
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
  </div>
  )
}

export default ShareLink