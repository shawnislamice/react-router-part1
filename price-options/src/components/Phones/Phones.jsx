import { useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { DNA } from "react-loader-spinner";
const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
  //       .then((res) => res.json())
  //       .then((data) => setPhones(data.data));
  //   }, []);
  axios
    .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then((data) => {
      const phoneData = data.data.data;
      const phonesWithFakeData = phoneData.map((phone) => {
        const obj = {
          name: phone.phone_name,
          price: parseInt(phone.slug.split("-")[1]),
        };
        return obj;
      });
      setPhones(phonesWithFakeData);
      setLoading(false);
    });
  return (
    <div>
      <h2 className="text-3xl">Phones: {phones.length}</h2>
      <BarChart width={1200} height={300} data={phones}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="price" barSize={30} fill="#8884d8" />
      </BarChart>
      <div className="h-screen flex justify-center items-center" >
        {loading && (
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
      </div>
    </div>
  );
};

export default Phones;
