import React from "react"
import { renderToString } from "react-dom/server"
import { SES } from "aws-sdk"
import contents from "./templateContents"

const {
  newTemplateName,
  subject,
  mainHeading,
  firstParagraph,
  bulletOne,
  bulletTwo,
  bulletThree,
  secondParagraph,
  closingWords,
  callToAction,
  ctaLinkUrl,
} = contents

function TemplateEmail() {
  return (
    <>
      <h1>{mainHeading}</h1>
      <p>{firstParagraph}</p>
      <ol>
        <li>{bulletOne}</li>
        <li>{bulletTwo}</li>
        <li>{bulletThree}</li>
      </ol>
      <p>{secondParagraph}</p>
      <p>{closingWords}</p>
      <a href={ctaLinkUrl}>
        <h2>{callToAction}</h2>
      </a>
    </>
  )
}
const componentHtml = renderToString(<TemplateEmail />)
export const templateHtml = `<html><head></head><body>${componentHtml}</body></html>`
export const templateText = `${mainHeading}\n\n\r${firstParagraph}\n\n\r${bulletOne}\n\r${bulletTwo}\n\r${bulletThree}\n\n\r${secondParagraph}\n\n\r${closingWords}\n\n\r${callToAction}\n\r${ctaLinkUrl}`

const ses = new SES({ apiVersion: "2010-12-01" })

const createTemplateParams = {
  Template: {
    TemplateName: newTemplateName,
    HtmlPart: templateHtml,
    SubjectPart: subject,
    TextPart: templateText,
  },
}

ses.createTemplate(createTemplateParams, function (err, data) {
  if (err) console.log(err, err.stack)
  else console.log(data)
})
