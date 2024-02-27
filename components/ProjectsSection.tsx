import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Tamra capital | تمرة المالية",
    description:
      "شركة مرخصة من هيئة السوق المالية برخصة رقم 20212 – 30 لخدمات المشورة المالية بتاريخ 26 أغسطس 2020 م ورخصة إدارة الاستثمار بتاريخ 14 يناير 2021 م. نتيح للأفراد الدخول في صناديق الاستثمار المحلية والعالمية بخطوات سهلة عبر منصة آمنة بعمليات مؤتمتة تزيل الأعباء وتضمن الدّقة",
    image: "/tamrafinal.png",
    link: "https://tamracapital.sa/#about",
  },
  {
    name: "ASEEL | أصـيل المالية",
    description: "أصيل هي شركة تقنية مالية مصرحة من هيئة السوق المالية من ضمن مختبر التقنية المالية، تعمل على منهجية الاستثمار الجماعي في الأصول العقارية، وتهدف إلى تحقيق عوائد مناسبة للمستثمرين من خلال الاستثمار في الفرص العقارية",
    image: "/AseelFinal.png",
    link: "https://investaseel.sa/",
  },
  {
    name: "Abyan capital | أبيان المالية",
    description:
      "ﻧﺆﻣﻦ ﻓﻲ أﺑﻴﺎن أن اﻟﺎﺳﺘﺜﻤﺎر ﻋﻠﻰ اﻟﻤﺪى اﻟﻄﻮﻳﻞ ﻫﻮ ﻟﺒﻨﺔ اﻟﺄﺳﺎس ﻓﻲ اﻟﺤﻴﺎة اﻟﻤﺎﻟﻴﺔ اﻟﻤﺘﻮازﻧﺔ. أبيان المالية وجدت لتوفر حلّا سهلاً وآليّاً لاستثمارات الأفراد بعيدة المدى عبر محافظ صممها خبراء بعملية مؤتمتة لاتستغرق الا دقائقاً. وهي شركة مصرحة من هيئة السوق المالية للعمل في مجال المستشار الآلي.",
    image: "/AbyanLogo.png",
    link: "https://abyancapital.sa/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        شركاؤنا
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection