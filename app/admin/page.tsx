"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminStore } from '@/lib/stores/adminStore';
import { Card } from '@/components/ui/card';
import { Loader2, Users, Image as ImageIcon, CheckCircle, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const { isAuthenticated } = useAdminStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Total Users"
          value={0}
          icon={Users}
          trend="+12%"
          color="blue"
        />
        <StatCard
          title="Total Images"
          value={0}
          icon={ImageIcon}
          trend="+8%"
          color="green"
        />
        <StatCard
          title="Success Rate"
          value="0%"
          icon={CheckCircle}
          trend="+5%"
          color="purple"
        />
        <StatCard
          title="Revenue"
          value="$0"
          icon={DollarSign}
          trend="+15%"
          color="yellow"
        />
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, trend, color }: any) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className={`rounded-full bg-${color}-100 p-3`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
      </div>
      <div className="mt-4">
        <span className="text-sm text-green-600">{trend}</span>
        <span className="text-sm text-gray-600"> vs last month</span>
      </div>
    </Card>
  );
}