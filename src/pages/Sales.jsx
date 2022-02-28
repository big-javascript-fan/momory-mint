import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import "../assets/css/sales.scss"

function ModelHair(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/hair.glb");

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    Object.keys(actions).map(key => {
      actions[key].play();
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}


function ModelKiss(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/kiss.glb");

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    Object.keys(actions).map(key => {
      actions[key].play();
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

function ModelEye(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/eye.glb");

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    Object.keys(actions).map(key => {
      actions[key].play();
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

export const Sales = () => {
  const [showHair, revealHair] = useState(false);
  const [showKiss, revealKiss] = useState(false);
  const [showEye, revealEye] = useState(false);
  return (
    <div id="sales" className=" scroller" style={{ "margin-top": "150px" }}>
      <div className="contain">
        <div className="content1">
          <div className="title">THE MEMORY MINT</div>
          <div className="paragraph">THE SOMMER SHIELS COLLECTION</div>
        </div>
        <div className="content2">
          <div className="title">ABOUT THE COLLECTION</div>
          <div className="paragraph">
            Sommer Shiels is a journalist, beauty industry expert and travel
            blogger. These memories were created in 2019 while on-location
            shooting the documentary, "Origins of Beauty".
          </div>
        </div>
        <div className="content3">
          <div className="title">SERIES A:</div>
          <div className="paragraph1">LIMIT 1098</div>
          <div className="paragraph2">
            "On January 23, 2019, I se sail from lquitos, Peru for the
            headwaters of the upper Ucayali River to meet with a Shipibo-Conibo
            ayahuasca medicine worker. Once there, I made friends with this
            precious monkey! This little guy clung to me like I was its mother,
            while it played with my hair and made kissing sounds at me. Looking
            into those deep brown eyes immediately takes me back to that most
            amazing time in my life. I was at this village for a little over six
            hours on this trip, so I'm limiting each of these to only 366
            immersive NFTs, one for every minute I spent with my monkey friend."
          </div>
        </div>
        <div className="content4">
          <div className="service" id="servicePlaying">
            <div className="pricing-table">
              <div className="left-table">
                <div className="header">
                  <p className="title">"PLAYING WITH MY HAIR"</p>
                  <p className="paragraph">Pre-sale Now Available</p>
                </div>
                <div className="content-top">
                  <span>ETH</span>
                  <span>.07</span>
                  <span>/66</span>
                </div>
                <div className="content-bottom">
                  <ul>
                    <li>
                      <span>Only 66 available for pre-sale.</span>
                    </li>
                    <li>
                      <span>
                        Available exclusively on our website until March 4,
                        2022.
                      </span>
                    </li>
                    <li>
                      <span>
                        Every Memory Mint entitles its holder to their own
                        Memory Vault (coming soon).
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="content-btn">
                  <a className="btn btn-custom" onClick={e => { e.preventDefault(); }}>COMING SOON</a>
                </div>
              </div>
              <div className="right-table">
                <div className="header">
                  <p className="title">"PLAYING WITH MY HAIR"</p>
                  <p className="paragraph">General Sale Begin March 4, 2022</p>
                </div>
                <div className="content-top">
                  <span>ETH</span>
                  <span>.08</span>
                  <span>/266</span>
                </div>
                <div className="content-bottom">
                  <ul>
                    <li>
                      <span>
                        266 available for general sale across all platforms.
                      </span>
                    </li>
                    <li>
                      <span>34 to be held in reserve.</span>
                    </li>
                    <li>
                      <span>
                        Every Memory Mint entitles its holder to their own
                        Memory Vault (coming soon).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-view">
              <div className="gltf-content" style={{ display: showHair ? 'block' : 'none'}}>
                <Canvas camera={{ position: [-10, 15, 15], fov: 50 }}>
                  <ambientLight intensity={1} />
                  <Suspense fallback={null}>
                    <ModelHair />
                  </Suspense>
                  <OrbitControls />
                </Canvas>
              </div>
              <a href="#" onClick={e => { e.preventDefault(); revealHair(true); }}>
                <img src="img/clicktoview.png" />
              </a>
            </div>
          </div>
          <div className="service" id="serviceKiss">
            <div className="pricing-table">
              <div className="left-table">
                <div className="header">
                  <p className="title">"PLAYING WITH MY HAIR"</p>
                  <p className="paragraph">Pre-sale Now Available</p>
                </div>
                <div className="content-top">
                  <span>ETH</span>
                  <span>.07</span>
                  <span>/66</span>
                </div>
                <div className="content-bottom">
                  <ul>
                    <li>
                      <span>Only 66 available for pre-sale.</span>
                    </li>
                    <li>
                      <span>
                        Available exclusively on our website until March 4,
                        2022.
                      </span>
                    </li>
                    <li>
                      <span>
                        Every Memory Mint entitles its holder to their own
                        Memory Vault (coming soon).
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="content-btn">
                  <a className="btn btn-custom" onClick={e => { e.preventDefault(); }}>COMING SOON</a>
                </div>
              </div>
              <div className="right-table">
                <div className="header">
                  <p className="title">"KISS"</p>
                  <p className="paragraph">General Sale Begin March 4, 2022</p>
                </div>
                <div className="content-top">
                  <span>ETH</span>
                  <span>.08</span>
                  <span>/266</span>
                </div>
                <div className="content-bottom">
                  <ul>
                    <li>
                      <span>
                        266 available for general sale across all platforms.
                      </span>
                    </li>
                    <li>
                      <span>34 to be held in reserve.</span>
                    </li>
                    <li>
                      <span>
                        Every Memory Mint entitles its holder to their own
                        Memory Vault (coming soon).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-view">
              <div className="gltf-content" style={{ display: showKiss ? 'block' : 'none'}}>
                <Canvas camera={{ position: [-10, 15, 15], fov: 50 }}>
                  <ambientLight intensity={1} />
                  <Suspense fallback={null}>
                    <ModelKiss />
                  </Suspense>
                  <OrbitControls />
                </Canvas>
              </div>
              <a href="#" onClick={e => { e.preventDefault(); revealKiss(true); }}>
                <img src="img/clicktoview.png" />
              </a>
            </div>
          </div>
          <div className="service" id="serviceEyes">
            <div className="pricing-table">
              <div className="left-table">
                <div className="header">
                  <p className="title">"EYE"</p>
                  <p className="paragraph">Pre-sale Now Available</p>
                </div>
                <div className="content-top">
                  <span>ETH</span>
                  <span>.07</span>
                  <span>/66</span>
                </div>
                <div className="content-bottom">
                  <ul>
                    <li>
                      <span>Only 66 available for pre-sale.</span>
                    </li>
                    <li>
                      <span>
                        Available exclusively on our website until March 4,
                        2022.
                      </span>
                    </li>
                    <li>
                      <span>
                        Every Memory Mint entitles its holder to their own
                        Memory Vault (coming soon).
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="content-btn">
                  <a className="btn btn-custom" onClick={e => { e.preventDefault(); }}>COMING SOON</a>
                </div>
              </div>
              <div className="right-table">
                <div className="header">
                  <p className="title">"PLAYING WITH MY HAIR"</p>
                  <p className="paragraph">General Sale Begin March 4, 2022</p>
                </div>
                <div className="content-top">
                  <span>ETH</span>
                  <span>.08</span>
                  <span>/266</span>
                </div>
                <div className="content-bottom">
                  <ul>
                    <li>
                      <span>
                        266 available for general sale across all platforms.
                      </span>
                    </li>
                    <li>
                      <span>34 to be held in reserve.</span>
                    </li>
                    <li>
                      <span>
                        Every Memory Mint entitles its holder to their own
                        Memory Vault (coming soon).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-view">
              <div className="gltf-content" style={{ display: showEye ? 'block' : 'none'}}>
                <Canvas camera={{ position: [-10, 15, 15], fov: 50 }}>
                  <ambientLight intensity={1} />
                  <Suspense fallback={null}>
                    <ModelEye />
                  </Suspense>
                  <OrbitControls />
                </Canvas>
              </div>
              <a href="#" onClick={e => { e.preventDefault(); revealEye(true); }}>
                <img src="img/clicktoview.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="content5">
          <div className="series">
            <span>SERIES REWARD:</span>
            <span>Complete an entire series and receive the following:</span>
            <ul>
              <li>
                Special SERIES NFT awarded only to holders of complete series.
              </li>
              <li>Access to Sommer's Personal Memory Vault</li>
              <li>
                Invitation to regular meet and greets with Sommer in her Memory
                Vault
              </li>
            </ul>
          </div>
          <div className="collection">
            <span>COLLECTION REWARD:</span>
            <span>
              Complete an entire colection and receive all of the above PLUS:
            </span>
            <ul>
              <li>
                Special COLLECTION NFT awarded only to holders of the complete
                collection.
              </li>
              <li>One-on-one chat sessions with Sommer</li>
            </ul>
          </div>
          <div className="roadmap">
            <span>ROADMAP FOR FUTURE RELEASE:</span>
            <ul>
              <li>
                SERIES B, featuring memories from Sommer's visit to Machu Picchu
                drops MARCH 11, 2022.
              </li>
              <li>
                Special, ultra-rare, one-of-one NFT "Becoming the Brand"
                announcement on MARCH 11, 2022.
              </li>
              <li>
                SERIES C, featuring memories from Sommer's 2019 trip to Tokyo
                drops MARCH 18, 2022.
              </li>
              <li>
                Future series TBA, featuring memories from Sommer's
                home in Bondi Beach, Australia.
              </li>
              <li>
                Special, limited edition drop of Sommer's work-out routine,
                featuring special guests and celebrity trainers, launching in
                Q2, 2022.
              </li>
            </ul>
          </div>
        </div>
        <div className="avatar"></div>
      </div>
    </div>
  )
}
