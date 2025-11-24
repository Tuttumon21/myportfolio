import CardSwap, { Card } from "@/components/CardSwap";
const Certificate = () => {
  return (
    <div className="h-screen relative bg-black text-white py-10">
      <CardSwap
        cardDistance={50}
        verticalDistance={90}
        delay={5000}
        pauseOnHover={false}
      >
       
        <Card>
          <h3>Card 1</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 2</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 3</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap>
    </div>
  );
};

export default Certificate;
