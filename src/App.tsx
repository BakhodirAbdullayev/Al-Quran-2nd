import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import RoutesWrapper from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { ChakraProvider } from "@chakra-ui/react";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#005036",
                colorPrimaryHover: "#005036",
                colorBgTextHover: "#b4c8d2",
              },
            }}
          >
            <QueryClientProvider client={queryClient}>
              <Layout>
                <RoutesWrapper />
              </Layout>
            </QueryClientProvider>
          </ConfigProvider>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
