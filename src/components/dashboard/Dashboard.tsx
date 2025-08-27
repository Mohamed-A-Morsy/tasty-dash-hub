import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Package, 
  ShoppingCart,
  DollarSign,
  Clock,
  Star,
  ChefHat
} from 'lucide-react';

const stats = [
  {
    title: 'Total Orders',
    value: '1,234',
    change: '+12%',
    icon: ShoppingCart,
    trend: 'up',
    color: 'text-accent'
  },
  {
    title: 'Revenue',
    value: '$45,231',
    change: '+8%',
    icon: DollarSign,
    trend: 'up',
    color: 'text-primary'
  },
  {
    title: 'Active Users',
    value: '573',
    change: '+23%',
    icon: Users,
    trend: 'up',
    color: 'text-secondary'
  },
  {
    title: 'Food Items',
    value: '89',
    change: '+3%',
    icon: Package,
    trend: 'up',
    color: 'text-accent'
  }
];

const recentOrders = [
  { id: '#1234', customer: 'John Doe', items: 'Burger, Fries', total: '$24.99', status: 'Delivered', time: '2 min ago' },
  { id: '#1235', customer: 'Jane Smith', items: 'Pizza, Soda', total: '$18.50', status: 'Preparing', time: '5 min ago' },
  { id: '#1236', customer: 'Mike Johnson', items: 'Salad, Juice', total: '$12.75', status: 'Pending', time: '8 min ago' },
  { id: '#1237', customer: 'Sarah Wilson', items: 'Pasta, Wine', total: '$32.00', status: 'On the way', time: '12 min ago' },
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    'Delivered': 'bg-accent text-accent-foreground',
    'Preparing': 'bg-secondary text-secondary-foreground', 
    'Pending': 'bg-muted text-muted-foreground',
    'On the way': 'bg-primary text-primary-foreground'
  };
  return statusConfig[status as keyof typeof statusConfig] || 'bg-muted text-muted-foreground';
};

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-primary-foreground shadow-warm">
        <div className="flex items-center gap-3 mb-4">
          <ChefHat className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Welcome to Food Delivery Dashboard</h1>
        </div>
        <p className="text-primary-foreground/80 text-lg">
          Manage your restaurant operations, track orders, and grow your business all in one place.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="shadow-card hover:shadow-warm transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 text-accent" />
                  <span className="text-accent font-medium">{stat.change}</span>
                  from last month
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Orders */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Clock className="h-5 w-5 text-primary" />
            Recent Orders
          </CardTitle>
          <CardDescription>
            Latest orders from your customers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-medium text-foreground">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">{order.id} • {order.items}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className={getStatusBadge(order.status)}>
                    {order.status}
                  </Badge>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{order.total}</p>
                    <p className="text-xs text-muted-foreground">{order.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card hover:shadow-warm transition-all duration-300 cursor-pointer bg-gradient-warm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Package className="h-5 w-5 text-primary" />
              Manage Food Items
            </CardTitle>
            <CardDescription>Add, edit, or remove items from your menu</CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-card hover:shadow-warm transition-all duration-300 cursor-pointer bg-gradient-warm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <ShoppingCart className="h-5 w-5 text-accent" />
              View Orders
            </CardTitle>
            <CardDescription>Track and manage customer orders</CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-card hover:shadow-warm transition-all duration-300 cursor-pointer bg-gradient-warm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Star className="h-5 w-5 text-secondary" />
              Customer Reviews
            </CardTitle>
            <CardDescription>Monitor feedback and ratings</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}