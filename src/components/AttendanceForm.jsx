import { Document, PDFDownloadLink, Page, Text, View} from "@react-pdf/renderer";
import React from "react";

const data = [
    { id: 1, no: 2001001713, name: 'John Doe', course: 'computer science', },
    { id: 2, no: 2001001713, name: 'John Doe Okello', course: 'computer science', },
    { id: 3, no: 2001001713, name: 'John Doe', course: 'computer science', },
    { id: 4, no: 2001001713, name: 'John Doe', course: 'computer science', },
    { id: 5, no: 2001001713, name: 'John Doe', course: 'computer science', },
    { id: 6, no: 2001001713, name: 'John Doe', course: 'computer science', },
    { id: 7, no: 2001001713, name: 'John Doe Okello', course: 'computer science', },
    { id: 8, no: 2001001713, name: 'John Doe', course: 'computer science', },
    { id: 9, no: 2001001713, name: 'John Doe', course: 'computer science', },
    { id: 10, no: 2001001713, name: 'John Doe', course: 'computer science', },
    { id: 11, no: 2001001713, name: 'John Doe', course: 'computer science', },
  ];

const AttendanceForm = () => {
  return (
    <Document 
        className=" ">
      <div className="bg-[#081A51] w-full h-2"></div>
      <Page size="A4" className="flex  items-center justify-center bg-gray-200">
        <View className="flex flex-col pt-2  flex-1">
          <Text className="font-extrabold text-[#081A51] text-3xl tracking-8 text-center pt-4">
            {" "}
            GULU UNIVERSITY
          </Text>
          <Text className="font-extrabold text-[#081A51] text-xl text-center ">
            {" "}
            FACULTY OF SCIENCE
          </Text>
          <Text className="font-extrabold text-[#081A51] text-md text-center ">
            {" "}
            STUDENTS ATTENDANCE
          </Text>
          <View className="flex m-4 text-[#081A51]">
            {/* left side */}
            <View className="flex flex-1 flex-col">
              <Text className="font-semibold">Course Code: GC3201</Text>
              <Text className="font-semibold">
                Course Name: Advanced Database
              </Text>
            </View>
            {/* right side */}
            <View className="flex flex-col">
              <Text className="font-semibold">Acamedic Year: 2022/2023</Text>
              <Text className="font-semibold self-end">Date: 02/04/2023</Text>
            </View>
          </View>
          <View className="table-auto w-full">
            {/* <Text>Hello</Text> */}
            <View className="font-bold text-white flex flex-row gap-32 flex-1 mx-2 bg-[#081A51] px-1 p-2 m-1">
                <Text className=" text-md ">ID</Text>
                <Text className=" text-md">Student Number</Text>
                <Text className=" text-md flex flex-1 -ml-12">Name</Text>
                <Text className=" text-md mr-16">Course</Text>
                <Text className=" text-md self-end text-end ">Status</Text>
            </View>
            <View className="table-auto w-full">
                {data?.map((row) => (
                    <View key={row.id} className=" text-gray-900 flex flex-row gap-32 flex-1 mx-2  px-1 p-2 m-1">
                        <Text className=" text-md">{row.id}</Text>
                        <Text className=" text-md ">{row.no}</Text>
                        <Text className=" text-md flex flex-1">{row.name}</Text>
                        <Text className=" text-md">{row.course}</Text>
                        <Text className=" text-md">signed</Text>
                    </View>
                ))}
            </View>
          </View>
          <View className="mt-4 mb-4 mx-4 flex flex-col">
            <Text className="text-md font-semibold">Received By:</Text>
            <Text className="text-base">Apiyo Gladys Sarah</Text>
          </View>

        </View>
        <Text 
        render={({ pageNumber, totalPages }) =>
        `${pageNumber} / ${totalPages}`
      }
        />
      </Page>
    </Document>
  );
};

export const DownloadButton = () => (
    <PDFDownloadLink document={<AttendanceForm />} fileName="course-attendance.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
  );

export default AttendanceForm;
