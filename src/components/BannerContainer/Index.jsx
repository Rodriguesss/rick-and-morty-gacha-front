import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import services from "../../services/services";
import { Image, Title, Floating, BannerWrapper, Box, New } from "./style";

const newItem = {
  position: "relative",
};

export default function BannerContainer() {
  const navigate = useNavigate();
  const { token, setBanner } = useAuth();
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    getBanners(token);
  }, []);

  function openBanner(banner) {
    setBanner(banner);
    navigate(`/banner/${banner.id}`);
  }

  async function getBanners(token) {
    const { data } = await services.findAllBanners(token);
    setBanners(data);
  }

  return (
    <>
      <Title>Banners</Title>
      <BannerWrapper>
        {banners.map((banner, index) => (
          <Floating key={index} id={index}>
            <Box style={newItem}>
              <Image
                src={import.meta.env.VITE_URL + banner.path}
                height="auto"
                width="300"
                onClick={() => openBanner(banner)}
              />
              <New
                src={`${import.meta.env.VITE_URL}/public/img/new.png`}
                height="auto"
                width="50"
              />
            </Box>
          </Floating>
        ))}
      </BannerWrapper>
    </>
  );
}
