import {
  Container,
  Header,
  CitiationFlowChart,
  GoogleRankingChart,
  ReportAuditScoreChart,
  ReportCard,
  ReportLineChart,
  ReportSessionChart,
} from "components";
import { reportLineChartData, reportStatsData } from "../../config/data";

const ReportPage = () => {
  return (
    <Container>
      <Header title="Reports" path={["Dashboard", "Reports"]} />
      <div className="grid md:grid-cols-6 xs:grid-cols-3 grid-cols-1 gap-5">
        {reportStatsData.map((data, index) => (
          <ReportCard data={data} key={index} />
        ))}
        <div className="rounded bg-danger text-white flex flex-col justify-center items-center">
          <div className="font-marcellus text-2xl mb-2">29</div>
          <div className="font-marcellus text-sm">Critical</div>
        </div>
        <div className="rounded bg-warn text-white flex flex-col justify-center items-center">
          <div className="font-marcellus text-2xl mb-2">279</div>
          <div className="font-marcellus text-sm">Errors</div>
        </div>
      </div>
      <div className="mt-10">
        <GoogleRankingChart />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-10 gap-10">
        <ReportAuditScoreChart />
        <ReportSessionChart />
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 mt-10 gap-10">
        <div className="grid xxs:grid-cols-3 grid-cols-1 gap-5">
          <div className="col-span-1">
            <div className="p-4 border mb-10 rounded">Facebook</div>
            <ReportCard
              data={{
                title: "Facebook Total Likes",
                value: "1,105",
                deviation: -49,
              }}
            />
          </div>
          <div className="col-span-2">
            <div className="p-4 border mb-10 rounded">Backlinks</div>
            <div className="grid xxs:grid-cols-2 grid-cols-1 gap-5">
              <ReportCard
                className="mb-10"
                data={{
                  title: "Total Backlinks",
                  value: "691 K",
                }}
              />
              <CitiationFlowChart />
            </div>
          </div>
        </div>

        <div className="grid xs:grid-cols-2 grid-cols-1 gap-8">
          {reportLineChartData.map((data, index) => (
            <div className="" key={index}>
              <div className="p-4 border mb-10 rounded">{data.title}</div>
              <ReportLineChart data={data} />
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </Container>
  );
};

export default ReportPage;
