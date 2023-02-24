import classNames from 'classnames'
import React from 'react'
import { types, File } from 'react-bricks'

type VideoPlatform = 'youtube' | 'vimeo'

const videoUrlPrefix: Record<VideoPlatform, string> = {
  youtube: 'https://www.youtube.com/embed/',
  vimeo: 'https://player.vimeo.com/video/',
} as const

export interface StreamingVideoProps {
  type: 'streaming'
  videoId?: string
  platform?: VideoPlatform
  className?: string
}

export interface FileVideoProps {
  type: 'file'
  file?: {
    name: string
    url: string
    size: number
  }
  className?: string
}

const Video: React.FC<StreamingVideoProps | FileVideoProps> = (props) => {
  if (props.type === 'streaming' && props.platform && props.videoId) {
    return (
      <div className={classNames('aspect-video', props.className)}>
        <iframe
          key="video iframe"
          width="100%"
          height="100%"
          src={`${videoUrlPrefix[props.platform]}${props.videoId}?rel=0`}
        />
      </div>
    )
  }

  if (props.type === 'file') {
    return (
      <File
        propName="videoFile"
        allowedExtensions={['.mp4']}
        renderBlock={(file) => {
          return file ? (
            <div className={classNames('aspect-video', props.className)}>
              <video src={file.url} autoPlay muted loop playsInline />
            </div>
          ) : (
            <div
              className={classNames(
                'aspect-video bg-gray-100 text-gray-400 flex justify-center items-center',
                props.className
              )}
            >
              Upload video (mp4)
            </div>
          )
        }}
      />
    )
  }

  return null
}
export default Video
