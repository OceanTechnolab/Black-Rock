import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ExportPallet = () => {
  const packingDetails = [
    {
      tileSize: "300X300 MM",
      tileThickness: "8.5 mm",
      tilesPerBox: "9 Pcs.",
      sqmPerBox: "0.81",
      boxesPerPallet: "108",
      sqmPerPallet: "87.48",
      palletsPerContainer: "22",
      boxesPerContainer: "2376",
      sqmPerContainer: "1924.56",
    },
    {
      tileSize: "300X450 MM",
      tileThickness: "8.5 mm",
      tilesPerBox: "6 Pcs.",
      sqmPerBox: "0.81",
      boxesPerPallet: "108",
      sqmPerPallet: "87.48",
      palletsPerContainer: "22",
      boxesPerContainer: "2376",
      sqmPerContainer: "1924.56",
    },
    {
      tileSize: "300X600 MM",
      tileThickness: "9.5 mm",
      tilesPerBox: "5 Pcs.",
      sqmPerBox: "0.9",
      boxesPerPallet: "96",
      sqmPerPallet: "86.40",
      palletsPerContainer: "19",
      boxesPerContainer: "1824",
      sqmPerContainer: "1641.60",
    },
    {
      tileSize: "300X600 MM",
      tileThickness: "9.5 mm",
      tilesPerBox: "8 Pcs.",
      sqmPerBox: "1.44",
      boxesPerPallet: "60",
      sqmPerPallet: "86.40",
      palletsPerContainer: "19",
      boxesPerContainer: "1140",
      sqmPerContainer: "1641.60",
    },
    {
      tileSize: "300X900 MM",
      tileThickness: "10.0 mm",
      tilesPerBox: "4 Pcs.",
      sqmPerBox: "1.08",
      boxesPerPallet: "64",
      sqmPerPallet: "69.12",
      palletsPerContainer: "20",
      boxesPerContainer: "1280",
      sqmPerContainer: "1382.40",
    },
  ];
  const tableData = [
    {
      tileSize: "300x600mm",
      tileThickness: "8.5mm",
      tilesPerBox: "8 Pcs.",
      sqmPerBox: "1.44",
      boxesPerPallet: "40",
      sqmPerPallet: "57.60",
      palletsPerContainer: "24",
      boxesPerContainer: "960",
      sqmPerContainer: "1382.40",
    },
    {
      tileSize: "600x600mm",
      tileThickness: "8.5mm",
      tilesPerBox: "4 Pcs.",
      sqmPerBox: "1.44",
      boxesPerPallet: "40",
      sqmPerPallet: "57.60",
      palletsPerContainer: "24",
      boxesPerContainer: "960",
      sqmPerContainer: "1382.40",
    },
    {
      tileSize: "600x1200mm",
      tileThickness: "9.0mm",
      tilesPerBox: "2 Pcs.",
      sqmPerBox: "1.44",
      boxesPerPallet: "64",
      sqmPerPallet: "92.16",
      palletsPerContainer: "10",
      boxesPerContainer: "640",
      sqmPerContainer: "921.60",
    },
    {
      tileSize: "600x1200mm",
      tileThickness: "9.0mm",
      tilesPerBox: "1 Pcs.",
      sqmPerBox: "1.44",
      boxesPerPallet: "64",
      sqmPerPallet: "92.16",
      palletsPerContainer: "19",
      boxesPerContainer: "1186",
      sqmPerContainer: "312",
    },
  ];
  const standardPalletData = [
    {
      tileSize: "300x300 MM",
      tileThickness: "8.5 mm",
      tilesPerBox: "9 Pcs.",
      sqmPerBox: "0.81",
      boxesPerPallet: "114",
      sqmPerPallet: "92.34",
      palletsPerContainer: "21",
      boxesPerContainer: "2394",
      sqmPerContainer: "1939.14",
    },
    {
      tileSize: "300x600 MM",
      tileThickness: "9.5 mm",
      tilesPerBox: "5 Pcs.",
      sqmPerBox: "0.9",
      boxesPerPallet: "84",
      sqmPerPallet: "75.60",
      palletsPerContainer: "21",
      boxesPerContainer: "1764",
      sqmPerContainer: "1587.60",
    },
    {
      tileSize: "300x600 MM",
      tileThickness: "9.5 mm",
      tilesPerBox: "8 Pcs.",
      sqmPerBox: "1.44",
      boxesPerPallet: "54",
      sqmPerPallet: "77.76",
      palletsPerContainer: "21",
      boxesPerContainer: "1134",
      sqmPerContainer: "1632.96",
    },
    {
      tileSize: "300x900 MM",
      tileThickness: "10.0 mm",
      tilesPerBox: "4 Pcs.",
      sqmPerBox: "1.08",
      boxesPerPallet: "54",
      sqmPerPallet: "58.32",
      palletsPerContainer: "22",
      boxesPerContainer: "1188",
      sqmPerContainer: "1283.04",
    },
  ];
  const euroPalletData = [
    {
      tileSize: "300x600mm",
      tileThickness: "8.5mm",
      tilesPerBox: "8 Pcs.",
      sqmPerBox: "1.44",
      boxesPerPallet: "36",
      sqmPerPallet: "51.84",
      palletsPerContainer: "26",
      boxesPerContainer: "936",
      sqmPerContainer: "1347.84",
    },
    {
      tileSize: "600x600mm",
      tileThickness: "8.5mm",
      tilesPerBox: "4 Pcs.",
      sqmPerBox: "1.44",
      boxesPerPallet: "36",
      sqmPerPallet: "51.84",
      palletsPerContainer: "26",
      boxesPerContainer: "936",
      sqmPerContainer: "1347.84",
    },
    {
      tileSize: "600x1200mm",
      tileThickness: "9.0mm",
      tilesPerBox: "2 Pcs.",
      sqmPerBox: "1.44",
      boxesPerPallet: "30",
      sqmPerPallet: "43.20",
      palletsPerContainer: "29",
      boxesPerContainer: "870",
      sqmPerContainer: "1252.80",
    },
  ];
  
  return (
    <Container className=" md:pb-20 xs:pb-5">
      <Row>
        <Col>
          <div className="md:mt-10 xs:mt-5 px-4 md:px-20">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Normal Pallet
            </h2>
            <p className="text-2xl md:text-xl mt-2 font-semibold">- Packing Detail</p>

            <p className="text-xl mt-4">Ceramic Wall Tile (Normal Pallet)</p>

            <div className="overflow-x-auto ">
              <table className="w-full border-collapse border border-black text-left">
                <thead>
                  <tr className="bg-black-rock-Grey text-sm md:text-base">
                    <th className="border border-black px-4 py-2">Tile Size</th>
                    <th className="border border-black px-4 py-2">
                      Tile Thickness
                    </th>
                    <th className="border border-black px-4 py-2">
                      Tiles / Box
                    </th>
                    <th className="border border-black px-4 py-2">
                      Sq.Mts / Box
                    </th>
                    <th className="border border-black px-4 py-2">
                      Boxes / Pallet
                    </th>
                    <th className="border border-black px-4 py-2">
                      Sq.Mts. / Pallet
                    </th>
                    <th className="border border-black px-4 py-2">
                      Pallets / Container
                    </th>
                    <th className="border border-black px-4 py-2">
                      Boxes / Container
                    </th>
                    <th className="border border-black px-4 py-2">
                      Sq.Mts. / Container
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {packingDetails.map((detail, index) => (
                    <tr key={index} className="text-sm md:text-base">
                      <td className="border border-black px-4 py-2">
                        {detail.tileSize}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.tileThickness}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.tilesPerBox}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.sqmPerBox}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.boxesPerPallet}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.sqmPerPallet}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.palletsPerContainer}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.boxesPerContainer}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.sqmPerContainer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Col>
        <Col>
          <div className="mt-10 px-4 md:px-20">
            <p className="text-xl mb-3">
              Porcelano Tile (Standard Pallet)
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-black text-left">
                <thead>
                  <tr className="bg-black-rock-Grey">
                    <th className="border border-black px-3 py-2">Tile Size</th>
                    <th className="border border-black px-3 py-2">
                      Tile Thickness
                    </th>
                    <th className="border border-black px-3 py-2">Tiles/Box</th>
                    <th className="border border-black px-3 py-2">
                      Sq mtr/Box
                    </th>
                    <th className="border border-black px-3 py-2">
                      Boxes/Pallet
                    </th>
                    <th className="border border-black px-3 py-2">
                      Sq mtr/Pallet
                    </th>
                    <th className="border border-black px-3 py-2">
                      Pallets/Container
                    </th>
                    <th className="border border-black px-3 py-2">
                      Boxes/Container
                    </th>
                    <th className="border border-black px-3 py-2">
                      Sq mtr/Container
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-black px-3 py-2">
                        {row.tileSize}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.tileThickness}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.tilesPerBox}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.sqmPerBox}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.boxesPerPallet}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.sqmPerPallet}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.palletsPerContainer}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.boxesPerContainer}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.sqmPerContainer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mt-10 px-4 md:px-20">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Euro Pallet
            </h2>
            <p className="text-2xl md:text-xl mt-2 font-semibold">- Packing Detail</p>

            <p className="text-xl mt-4">Ceramic Wall Tile (Euro Pallet)</p>

            <div className="overflow-x-auto ">
              <table className="w-full border-collapse border border-black text-left">
                <thead>
                  <tr className="bg-black-rock-Grey text-sm md:text-base">
                    <th className="border border-black px-4 py-2">Tile Size</th>
                    <th className="border border-black px-4 py-2">
                      Tile Thickness
                    </th>
                    <th className="border border-black px-4 py-2">
                      Tiles / Box
                    </th>
                    <th className="border border-black px-4 py-2">
                      Sq.Mts / Box
                    </th>
                    <th className="border border-black px-4 py-2">
                      Boxes / Pallet
                    </th>
                    <th className="border border-black px-4 py-2">
                      Sq.Mts. / Pallet
                    </th>
                    <th className="border border-black px-4 py-2">
                      Pallets / Container
                    </th>
                    <th className="border border-black px-4 py-2">
                      Boxes / Container
                    </th>
                    <th className="border border-black px-4 py-2">
                      Sq.Mts. / Container
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {standardPalletData.map((detail, index) => (
                    <tr key={index} className="text-sm md:text-base">
                      <td className="border border-black px-4 py-2">
                        {detail.tileSize}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.tileThickness}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.tilesPerBox}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.sqmPerBox}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.boxesPerPallet}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.sqmPerPallet}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.palletsPerContainer}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.boxesPerContainer}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {detail.sqmPerContainer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Col>
        <Col>
          <div className="mt-10 px-4 md:px-20">
            <p className="text-xl mb-3">
              Porcelano Tile (Euro Pallet)
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-black text-left">
                <thead>
                  <tr className="bg-black-rock-Grey">
                    <th className="border border-black px-3 py-2">Tile Size</th>
                    <th className="border border-black px-3 py-2">
                      Tile Thickness
                    </th>
                    <th className="border border-black px-3 py-2">Tiles/Box</th>
                    <th className="border border-black px-3 py-2">
                      Sq mtr/Box
                    </th>
                    <th className="border border-black px-3 py-2">
                      Boxes/Pallet
                    </th>
                    <th className="border border-black px-3 py-2">
                      Sq mtr/Pallet
                    </th>
                    <th className="border border-black px-3 py-2">
                      Pallets/Container
                    </th>
                    <th className="border border-black px-3 py-2">
                      Boxes/Container
                    </th>
                    <th className="border border-black px-3 py-2">
                      Sq mtr/Container
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {euroPalletData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-black px-3 py-2">
                        {row.tileSize}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.tileThickness}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.tilesPerBox}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.sqmPerBox}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.boxesPerPallet}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.sqmPerPallet}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.palletsPerContainer}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.boxesPerContainer}
                      </td>
                      <td className="border border-black px-3 py-2">
                        {row.sqmPerContainer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExportPallet;
