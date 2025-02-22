import { FC, useState } from "react";
import { Layout, Menu, theme } from "antd";
import Footer from "../shared/Footer";
import {
  FilePlus,
  UserRoundPen,
  SendToBack,
  FolderKanban,
  LogOut,
} from "lucide-react";
import ManageUsers from "@/pages/admin/ManageUsers";
import AddProducts from "@/pages/admin/AddProducts";
import ManageOrders from "@/pages/admin/ManageOrders";
import ManageProducts from "@/pages/admin/ManageProducts";

// Import your different content components


const { Content, Sider } = Layout;

const DashboardLayout: FC = () => {
  const [selectedKey, setSelectedKey] = useState("1"); // Track selected menu key

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "1",
      icon: <UserRoundPen />,
      label: "Manage Users",
      component: <ManageUsers />,
    },
    {
      key: "2",
      icon: <FilePlus />,
      label: "Add Product",
      component: <AddProducts />,
    },
    {
      key: "3",
      icon: <SendToBack />,
      label: "Manage Orders",
      component: <ManageOrders />,
    },
    {
      key: "4",
      icon: <FolderKanban />,
      label: "Manage Products",
      component: <ManageProducts />,
    },
    {
      key: "5",
      icon: <LogOut />,
      label: "Logout",
      component: <div>Logging out...</div>,
    },
  ];

  const selectedComponent = menuItems.find((item) => item.key === selectedKey)
    ?.component || <ManageUsers />;

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <h2 className="border rounded shadow-xl mb-4 p-2 text-blue-400 font-orbitron font-bold">
          Dashboard
        </h2>
        <Menu
          theme="dark"
          mode="inline"
          className="font-orbitron text-[10px]"
          defaultSelectedKeys={["1"]}
          onClick={(e) => setSelectedKey(e.key)}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              marginTop: "1rem",
            }}
          >
            {selectedComponent} {/* Show the selected component */}
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
