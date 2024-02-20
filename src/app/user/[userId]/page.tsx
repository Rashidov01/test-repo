import React from "react";
import dayjs from "dayjs";
import "./user.css";
import AsideBar from "@/components/main-layout/aside-bar";
import LineBarChart from "@/components/linebar-chart";

const getUserById = async (userId: string) => {
  const result = await fetch(`http://localhost:3000/api/search?query=${userId}`)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error("Failed to fetch data");
    });

  return result?.data;
};

export default async function USerDetailsPage({
  params: { userId },
}: {
  params: { userId: string };
}) {
  const userInfo = await getUserById(userId);
  console.log("userInfo:::", userInfo.datasets);

  return (
    <div className="main-page flex">
      <div className="sidebar border-r border-solid border-r-grey">
        <AsideBar />
      </div>

      <main className="container">
        <div className="main-container py-5">
          <p className="text-gray-700">
            User Id: <span className="text-gray-400">{userInfo?.id}</span>
          </p>
          <p>
            User Name: <span className="text-gray-400">{userInfo?.name}</span>
          </p>
          {userInfo?.datasets && (
            <div>
              <p className="text-grey-600">User accelerations:</p>
              <ul>
                {userInfo.datasets.map((item: any, index: number) => (
                  <li className="text-gray-400" key={index}>
                    {item.acceleration}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {userInfo?.datasets && (
            <div>
              <p className="text-gray-700">User accs:</p>
              <ul>
                {userInfo.datasets.map((item: any, index: number) => (
                  <li className="text-gray-400" key={index}>
                    {item.acc}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-gray-700">
            User Time:{" "}
            <span className="text-gray-400">
              {dayjs(userInfo?.time).format("DD/MM/YYYY")}{" "}
            </span>
          </p>
        </div>

        <LineBarChart userData={userInfo} />
      </main>
    </div>
  );
}
