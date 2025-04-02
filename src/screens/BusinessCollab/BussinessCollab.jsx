import React from "react";
import BecomePartner from "../../sections/Landing/BecomePartner/BecomePartner";
import TrustedAllies from "../../sections/BussinessCollab/TrustedAllies/TrustedAllies";
import PartnerStory from "../../sections/BussinessCollab/PartnerStory/PartnerStory";
import PartnerNumbers from "../../sections/BussinessCollab/PartnerNumbers/PartnerNumbers";
import PartnershipProgram from "../../sections/BussinessCollab/PartnershipProgram/PartnerShipProgram";

function BussinessCollab() {
  return (
    <>
      <BecomePartner spaceEvenly={true} />
      <TrustedAllies />
      <PartnerStory />
      <PartnerNumbers />
      <PartnershipProgram />
    </>
  );
}

export default BussinessCollab;
