import "./App.css";

function App() {
  const customers = [
    {
      id: "1",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/5/5f/Batman_Three_Jokers.jpg",
      customerName: "Joker",
      description:
        "The Joker is a supervillain appearing in American comic books published by DC Comics. Created by Bill Finger, Bob Kane, and Jerry Robinson, the character first appeared in the debut issue of the comic book Batman on April 25, 1940.",
      userProfile:
        "https://www.google.com/search?sca_esv=aab2b39fff45af2f&cs=1&sxsrf=ADLYWIKI1t4vPDnt60Oc4WphQsY_HrJ_cw:1718525945775&q=Joker+(character)&stick=H4sIAAAAAAAAAE1Sv2_TQBiNIzVyrkUkrlShDCgKDCFL7LPj2CypVMqAqJBoFiYrOf9K7LOd2PKPjEgswFAxsCIxIcFfwIAQYiFCCDGwwYC6sIDYWJBo2vsCt_h9373vvfO74zdafJd2xUhNCT5vT3zaJO5oPiKJNY-XXHW1J-U9By-5NY9BOUl8Bs2FNgOyik2XtSWz5zBoTwONQSe1RUbGuanJrO0GGRj23MjQlxw6lY7HdK6DCi5gVNYiqjBM9FlSgLqRjFlbS_MYsK7aJmAs08xYcue6TleSXF3sxwGZMTtNnBpOCnbS2AE7ok7XFpnvrKFHQdVUdcJUFC-V9ZQVPT2jhLKCiFJqQ4K4Z0ZsWk2LDJQkl6br7GO8Sgid0Y0gBlUcZDPF_q9wJDiqqvRzSNKYyhT-xqN9OBLWNC-CCEjUo1qA4QZxosQw46gLCTwiT4xNxlEixQQP1fDmPsQsu2oAOpE0Bb6sE1sFvmKmcHPyQpxl37gf3Gbt---v241j7tGLd5-5Lxyq3QzD2PKL25Y_SixzGAo7qLIfJJOkELYaCJ0FmOaBMESbh1YyDA9Cc2IXwr6wh6oHFh2fPOBbtoAR2gt93yLJJAyEy40WanbJutG1J6ffkW_8e_ZXy-1y6w6-_vLT4w-V3XrpZL2_d7jbaHfqqHItpKNJUH87e33p4vzhoLON-OEoD4OQFvVfH48vPLn_fNCqVldDD_78HHRKR2Xu7qtnbyo8z9VKuMyXFqWtpxv1G6FnzZvtteuVowr3FwNhwLGNAwAA&sa=X&ved=2ahUKEwj03puE2N-GAxWM7jgGHSxfD8AQ7fAIegUIABCoBQ",
    },
    {
      id: "2",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/a/a2/Jack_Sparrow_In_Pirates_of_the_Caribbean-_At_World%27s_End.JPG",
      customerName: "Captain Jack Sparrow",
      description:
        "Captain Jack Sparrow is a fictional character and the main protagonist of the Pirates of the Caribbean film series and franchise. An early iteration of Sparrow was created by screenwriters Ted Elliott and Terry Rossio",
      userProfile:
        "https://www.google.com/search?sca_esv=aab2b39fff45af2f&cs=1&sxsrf=ADLYWIKI1t4vPDnt60Oc4WphQsY_HrJ_cw:1718525945775&q=Captain+Jack+Sparrow&stick=H4sIAAAAAAAAAE1Sv2_TQBiNIzVKrkUkLkIoA4oCQ5Ul9tlxbZZWCmVAVEgkC5PlnH8l9tmObdlxRiQWYKgYWJGYkOAvYEAIsRAhhBjYYEBdWEBsLEgk7X0pt_h9373vvfO7q260a13aFcRZz8H4vD32aYu4RmyQ1IqTBXe2ueCqKxwpGWFQSlOfQXOuToGsYNNlbdHsOQzak0Bl0MlsgZHxzFQl1naDHAx7bqRrCw6dSCcjGmugggsYldSIygwTbZoWoK6nI9ZWs1kCWFNsEzCWaK4vuHNdpyuKribsJgGZMjtVmOhOBnbiyAE7okzWFrnvrKFHQdVUNMJUZC-TtIwVPS2nhLKCCGJmQ4K4Z0ZsWsmKHJREl2br7BO8Sgid0vUgAVUc5FPZ_q9wRDiqIu_OIEl9IlH4G4_uwpGwqnoRRECiHlUDDDeIUzmBGUeZi-AReUJiMo4cySZ4KLoX-xCz5CoB6ETiBPiSRmwF-LKZwc1Jc2Gaf-d-cpv1H3--bTePuccv33_hvnKofisME8sv7li-kVrmMOQvospBkI7Tgt9qInQaYDYL-CHaHFjpMDwMzbFd8Ad8H9UOLTpaPuDbNo8R6oe-b5F0HAb81WYbtbpk3eja45Ov4etnz_5aeafcvotvvPr85GNlv1Farg_3B_vNnU4DVa6H1BgHjXfTN1cux4_2OtuoOjRmYRDSovH70_Glpw9e7LVrtdXQw7-_9jqlozJ37_Xzt5VqlauXcLlampe2nm1c6BtRuhRq3TSI1xpERhyH-VGF-wcXtn5CkQMAAA&sa=X&ved=2ahUKEwj03puE2N-GAxWM7jgGHSxfD8AQ7fAIegUIABCVBQ",
    },
    {
      id: "3",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/170px-Gandalf600ppx.jpg",
      customerName: "Gandalf",
      description:
        "Gandalf is a protagonist in J. R. R. Tolkien's novels The Hobbit and The Lord of the Rings. He is a wizard, one of the Istari order, and the leader of the Fellowship of the Ring. Tolkien took the name Gandalf from the Old Norse Catalogue of Dwarves in the Völuspá",
      userProfile:
        "https://www.google.com/search?sca_esv=aab2b39fff45af2f&cs=1&sxsrf=ADLYWIKI1t4vPDnt60Oc4WphQsY_HrJ_cw:1718525945775&q=Gandalf&stick=H4sIAAAAAAAAAE1Sv2_TQBiNIzUk1yISV6pQBlQFhipL7LPj2iytVAoLFRLNwmQ5d_6RxHd2YsuOMyKxAEPFwIrEhAR_AQNCiIUIIcTABgPqwgJiY0Giae8L3OL3ffe-987vrrrSqnZYR6Ezc4wveIOQbZLAmTgkdSfJXKot9tRp18dz6ZQXGxkRUEvTUMDFNJANTAPRVmnXF9AbclNAP_MUQcZTamqiHfAcDLtBbFtzCZ1KJ302sUAFFzCqmTHTBSbWOC1A3U77om1m0wSwZXgUMNZYbs-l8x2_o6qBpWwnnIyFnakMbT8DO7Xvgx0xhkuLPPSXcMRAlRoWESr6KNOsTBRdK2eEiYIoauZBgrhLYzFtZEUOSmrAsmX2CV4khM7oNk9AFfN8rHv_Fb4KRzX07SkkaQ81Bn8zYttwJGyaoxgiIHGXmRzDDeJUT2DGN2YqeMQjJaGCo8c6BQ_DHk1CiFkLDA46sToEvmYRzwC-TjO4OW2mjPNv0g9ptf7999f15rH06MW7z9IXCdVvRlHihsVtN3RSl_YieQNV9nk6SAt5rYnQWYDZlMs9tHropr3oIKIDr5D35T1UO3BZ_-QB3_JkjNBeFIYuSQcRl680W2izQ5aNjjc4_Tqh_e_ZXy1vlVt38PWXnx5_qOw2Sifr_b3D3eZWu4Eq1yLmDHjj7fj15UuThzvtdVTtOdOIR6xo_Pp4fPHJ_ec7rVptMfTgz8-ddumoLN199exNpVqV6iVcrpZmpbWnK-duOJw6oXdUkf4CMVuxdYMDAAA&sa=X&ved=2ahUKEwj03puE2N-GAxWM7jgGHSxfD8AQ7fAIegUIABDFBQ",
    },
    {
      id: "4",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg/220px-Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg",
      customerName: "Han Solo",
      description:
        "Smuggler. Scoundrel. Hero. Han Solo, captain of the Millennium Falcon, was one of the great leaders of the Rebel Alliance. He and his co-pilot Chewbacca came to believe in the cause of galactic freedom, joining Luke Skywalker and Princess Leia Organa in the fight against the Empire.",
      userProfile:
        "https://www.google.com/search?sca_esv=aab2b39fff45af2f&cs=1&sxsrf=ADLYWIKI1t4vPDnt60Oc4WphQsY_HrJ_cw:1718525945775&q=Han+Solo&stick=H4sIAAAAAAAAAE1Sv2_TQBiNIzVyrkUkroRQBlQFhqpL7LPj2CytVIoYqJBoFibLOf9K7Ds7sWXHGZFYgKFiYEViQoK_gAEhxEKEEGJggwF1YQGxsSDRpPcFbvH7vnvfe-d3J661xQ7tyN6IGfi8N4zoFgnsiU0yd5LOhfpiT5l2fTwXlrxEzwmHapZFHDozYwxkHTsBbytO1-dwoc-hn3syJ-OpY6i8HbACDLtBYplzAS2l0wGdmKCCSxhVjYRqHBNznJWgbmUD3jbyaQrY1D0HMFZpYc2Fcx2_oyiBKfdSRsbczpBHlp-DnTLwwY7oo5VFEfkrGFJQdXSTcBUtzFUz50XXLCihvCCyknuQIO46CZ_W87IAJSWg-Sr7FC8SQmd0i6Wgilkx1rz_Cl-Bo-pabwpJWiOVwt-EtAdHwoYRJhABSbrUYBhuEGdaCjO-PlPAIwnl1OEcLdEc8NCtcBJBzGqgM9BJlBHwVZN4OvA1J4ebU2fyuPgm_BDWG99_f91snQiPXrz7LHwRUONmHKduVN52IztznX4sXUC1A5YNs1LaaCF0FmA-ZVIfrR-5WT8-jJ2hV0oH0j6qH7p0cPqAb3kSRmg_jiKXZMOYSVdabbTVIatGxxsuv3Zk_Xv2V6vb1fYdfP3lp8cfanvNyul6f-9or7W900S1azG1h6z5dvz68qXJw92dTST27WnMYlo2f308ufjk_vPddr2-GHrw5-fuTuW4Ktx99exNTRSFRgVXxcqssvF0Tbxhs62jOIqPa8JfnnbND4QDAAA&sa=X&ved=2ahUKEwj03puE2N-GAxWM7jgGHSxfD8AQ7fAIegUIABD7BQ",
    },
    {
      id: "5",
      avatar:
        "https://3.bp.blogspot.com/_mpBGa4P5jUo/TCoO1c2NO2I/AAAAAAAAEzQ/Wdvf2j5XDys/s1600/hannibalthecannibal.jpg",
      customerName: "Hannibal Lecter",
      description:
        "Dr. Hannibal Lecter is a character created by the American novelist Thomas Harris. Lecter is a serial killer who eats his victims",
      userProfile:
        "https://www.google.com/search?sca_esv=aab2b39fff45af2f&cs=1&sxsrf=ADLYWIKI1t4vPDnt60Oc4WphQsY_HrJ_cw:1718525945775&q=Hannibal+Lecter&stick=H4sIAAAAAAAAAE1Sv2_TQBiNIzVKrkVNXAmhDCgKDFWW2GfHtVlaqRQxtEKiWZgs5_wz8Z2d2LLjjEgswFAxsCIxIcFfwIAQYiFCCDGwwYC6sIDYWJBomvsCt_h9373vvfO7q661a13alWQN2z7edIOQtohvTSySOpNkLiw3pz0Pz4XqAsdaRjhU0jTk0J7pYyAvlHhbtnseh-6Q6Rx6mStxMp7ausLbPsvBsOfHpjEX0Ll0MqATA1RwAaOKHlOVY2KM0wLUzXTA23o2TQAbmmsDxgrNzblwoet1Zdk3pJ2EkTG306Wh6WVgJw88sCPacGWRh94Kjiio2ppBuIo6yhQj40XPyCmhvCCSnLmQIO7ZMZ_WsiIHJdmn2Sr7BC8SQku6yRJQxSwfq-5_hSfDUTV1ZwpJmkOFwt-M6A4cCev6KIYISNyjOsNwgzhVE5jxtJkMHvFISmzOUWPVBg_NHE1CiFnxNQY6sTwEvmIQVwO-amdwc8pMGuffhB_Cev37769bzVPh0Yt3n4UvAqofRlHihMVtJ7RSx-5H4kVUOWBpkBbiRhOhZYDZlIl9tH7spP3oKLIDtxAPxH1UO3Lo4OwB33JFjNB-FIYOSYOIiVebbdTqklWj6wbnXys0_z37a-XtcvsOvvHy0-MPlb1G6Wy9v3e819zuNFDlekStgDXejl9fuTx5uNvZQtW-NY1YRIvGr4-nl57cf77brtUWQw_-_NztlE7Kwt1Xz95UqlWhXsLlamlW2ni6tnnTYiwYWGHr0FmYnlSEv7n2mOCMAwAA&sa=X&ved=2ahUKEwj03puE2N-GAxWM7jgGHSxfD8AQ7fAIegUIABDYBQ",
    },
  ];
  return (
    <>
      <h1>Customer Data</h1>
      <hr></hr>
      {
        customers.map((customer,index)=>
          (<div className="card" key={index}>
            <img
              src={customer.avatar}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{customer.customerName}</h5>
              <p className="card-text">
                {customer.description}
              </p>
              <a href={customer.userProfile} className="btn btn-primary" target="_blank">
                Go somewhere
              </a>
            </div>
          </div>)
        )
      }
    </>
  );
}

export default App;
