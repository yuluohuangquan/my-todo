'use client';

// 如果是在 Pages Router 中使用，则不需要添加 "use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, Space } from 'antd';

export default function Page() {
  const router = useRouter();

  const pushRoute = (url: string) => {
    router.push(url);
  };

  return (
    <div className="App">
      <Space>
        <Card onClick={() => pushRoute('/toDoList')}>待办列表</Card>
        <Card onClick={() => pushRoute('/addToDo')}>新增待办</Card>
        <Card onClick={() => pushRoute('/informalEssay')}>随笔</Card>
      </Space>
    </div>
  );
}
