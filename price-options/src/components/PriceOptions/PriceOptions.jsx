import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: "$29.99/month",
      features: [
        "Access to cardio machines",
        "Access to weightlifting area",
        "Locker rental available for an additional fee",
        "24/7 access to the gym",
        "Discounts on gym merchandise",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: "$49.99/month",
      features: [
        "All Basic features included",
        "Access to group fitness classes",
        "Access to sauna and steam room",
        "Monthly guest passes",
        "Access to swimming pool",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: "$79.99/month",
      features: [
        "All Standard features included",
        "Access to personal training sessions",
        "Free towel service",
        "Nutritional counseling sessions",
        "Access to exclusive member events",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-center text-4xl font-bold">Best Prices in the Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
