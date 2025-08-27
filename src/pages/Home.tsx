import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-food-orange/20 to-food-red/20">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-food-red">Food Delivery</h1>
        <p className="text-xl text-muted-foreground">Welcome to your food delivery dashboard</p>
        <div className="space-x-4">
          <Button asChild className="bg-food-red hover:bg-food-red/90">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;