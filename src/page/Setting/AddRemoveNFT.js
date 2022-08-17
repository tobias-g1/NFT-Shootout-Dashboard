import { Formik, Form } from "formik";
import Slider from "react-slick";
import { Button, ScoutPackCard } from "components";
import { scoutPackData } from "config/data";

const { Container, Header, FormInput } = require("components");

const AddRemoveNFTPage = () => {
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
      <Header title="Add/Remove Nft's"></Header>
      <div className="rounded bg-light p-4">
        <div className="grid sm:grid-cols-2 grid-cols-1 bg-white px-6 py-3">
          <Formik>
            {({ values, isSubmitting }) => {
              console.log(values);
              return (
                <Form>
                  <div className="">
                    <FormInput
                      name="address"
                      label="Add Individual NFT wallet addresses here"
                    />
                    <Button type="primary" className="mt-4">
                      Submit
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
          <div className="sm:px-4 py-2 px-0">
            <div className="flex items-center xxs:flex-row flex-col">
              <div className="font-bold">Bulk upload NFT address</div>
              <Button type="primary" className="ml-4 xxs:mt-0 mt-4">
                Import CSV
              </Button>
            </div>
            <div className="mt-4 text-sm">
              When uploading via Excel, please ensure one wallet address per row
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between mb-4">
            <div className="text-xl">Players</div>
            <Button type="secondary">Add New Player</Button>
          </div>
          <div>
            <Slider {...settings}>
              {scoutPackData.map((data, index) => (
                <ScoutPackCard data={data} key={index} />
              ))}
            </Slider>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between mb-4">
            <div className="text-xl">Scouts</div>
            <Button type="secondary">Add New Scout</Button>
          </div>
          <div>
            <Slider {...settings}>
              {scoutPackData.map((data, index) => (
                <ScoutPackCard data={data} key={index} />
              ))}
            </Slider>
          </div>
        </div>

        <div className="mt-10 mb-20">
          <div className="flex justify-between mb-4">
            <div className="text-xl">Stadiums</div>
            <Button type="secondary">Add New Stadium</Button>
          </div>
          <div>
            <Slider {...settings}>
              {scoutPackData.map((data, index) => (
                <ScoutPackCard data={data} key={index} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddRemoveNFTPage;
