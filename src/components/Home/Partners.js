import mbToken from "../../img/mbtoken.png"
import metaMask from "../../img/metamask.png"
import openSea from "../../img/opensea.png"

function Partners() {
  return (
    <section id="partners" className="flex justify-evenly align-center">
      <img src={mbToken} alt="MBToken" />
      <img src={metaMask} alt="MetaMask" />
      <img src={openSea} alt="OpenSea" />
    </section>
  );
}

export default Partners;
