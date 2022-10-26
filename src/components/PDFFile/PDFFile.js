import { Document, Image, Page, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = ({ course }) => {
  const { image, description, title, students, rating } = course;
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          {title}
        </Text>
        <Image style={styles.image} src={image} />
          <Text style={styles.text}>Total Students: {students}</Text>
          <Text style={styles.text}>Rating: {rating} star</Text>
        <Text style={styles.text}>{description}</Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
