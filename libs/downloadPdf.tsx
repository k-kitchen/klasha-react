import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { MutableRefObject } from "react";

const downloadToPdf = (docRef: MutableRefObject<any>, downloadName: string) => {
  html2canvas(docRef.current, { scale: Number("5") })
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const doc = new jsPDF({
        format: "a4",
        orientation: "p",
        unit: "px",
        compress: true,
      });
      // doc.setFillColor(255, 251, 247);
      doc.setFillColor("#fffbf7");
      // console.log("doc");
      // console.log(doc);
      // doc.setFontSize(10);
      // const imgProps = doc.getImageProperties(imgData);
      // // const width = doc.internal.pageSize.getWidth();
      // const width = 400;
      // console.log("width");
      // console.log(width);
      // // const height = (imgProps.height * width) / imgProps.width;
      // const height = 640;
      // console.log("height");
      // console.log(imgProps.height);
      // console.log(height);
      //
      // doc.addImage(imgData, "JPEG", 0, 0, width, height, "FAST");

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const widthRatio = pageWidth / canvas.width;
      const heightRatio = pageHeight / canvas.height;
      const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

      const canvasWidth = canvas.width * ratio;
      const canvasHeight = canvas.height * ratio;

      const marginX = (pageWidth - canvasWidth) / 2;
      const marginY = (pageHeight - canvasHeight) / 2;

      doc.addImage(
        imgData,
        "JPEG",
        marginX,
        marginY,
        canvasWidth,
        canvasHeight
      );
      doc.save(downloadName + ".pdf");
    })
    .catch((err) => {
      return err;
    });
};

export default downloadToPdf;
