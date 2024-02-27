import React from "react"
import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2024 استثمر
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://tamracapital.sa/" rel="noreferrer" target="_blank">
          </a>
          <a
            href="https://x.com/estathmer?s=21&t=JUoUIlolOGwHs44MCro42A"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/estathmer-platform-b6ba662b6?trk=contact-info"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer