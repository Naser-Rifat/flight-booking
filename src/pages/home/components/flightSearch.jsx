import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const FlightSearch = () => {
  return (
    <div className="  ">
      <div className="flex justify-center  h-96 ">
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <div className="w-96">
            <TabPanel>
              <div className="h-20 ">
                <Tabs>
                  <TabList>
                    <Tab className="rounded-full border inline-block  px-2 "> </Tab>
                    <Tab>Title 2</Tab>
                  </TabList>
                </Tabs>
              </div>
            </TabPanel>
          </div>
          <TabPanel>
            <div className="h-20 ">
              <h2>Any content 2</h2>
            </div>{" "}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default FlightSearch;
