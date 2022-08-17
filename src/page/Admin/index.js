import Slider from "react-slick";
import { Button, Container, Header, ScoutPackCard } from "components";
import { scoutPackData } from "../../config/data";

const AdminPage = () => {
  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <Container>
      <Header title="Scouts Admin" path={["Dashboard", "Scouts Admin"]} />
      <div className="bg-light rounded p-4">
        <div className="text-xl bg-white py-4 text-center text-primary">
          You do not have any scout card assigned to this account
        </div>
        <div className="bg-white py-4 px-4 text-primary mt-4">
          <div>Add Scout wallet addresses here</div>
          <input className="w-full outline-none border focus:border-info px-3 py-2 my-2 rounded " />
          <Button>Submit</Button>
        </div>

        <div className="mt-10">
          <div className="flex justify-between mb-8">
            <div className="text-xl">These are your scout packs</div>
            <div className="flex">
              <input
                placeholder="Add Scout wallet address here  "
                className="outline-none border focus:border-info px-3 py-1 mr-2 rounded w-80"
              />
              <Button>Submit</Button>
            </div>
          </div>
          <div>
            <Slider {...settings}>
              {scoutPackData.map((data, index) => (
                <ScoutPackCard data={data} key={index} />
              ))}
            </Slider>
          </div>
          <div className="text-xl mb-10 mt-20">
            These are your newly minted players that will be added here
            automatically
          </div>
          <div>
            <Slider {...settings}>
              {scoutPackData.map((data, index) => (
                <ScoutPackCard data={data} key={index} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="text-danger bg-softDanger py-5 px-2 text-center text-lg mt-10">
          Note: All newly minted player NTS are subject to a 75% minting fee
          upon sale
        </div>
      </div>
    </Container>
  );
};

export default AdminPage;
