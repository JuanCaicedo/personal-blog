import React from 'react'
import Image from 'next/image'

export default function ProfileImage() {
  return (
    <Image
      src="/images/juan.jpg"
      alt="Juan, the type of guy you'd like to have a beer with"
      width={1246}
      height={1243}
      priority
    />
  )
}
