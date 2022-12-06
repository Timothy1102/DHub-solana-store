import { useState } from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { EyeTwoTone, CheckCircleTwoTone, HeartTwoTone } from '@ant-design/icons'
import '../styles/nft-details.css'
import Modal from '../components/ui/Modal/Modal'
import ModalTransferNft from '../components/ui/Modal-transfer-nft/ModalTransferNFT'
import ModalListNft from '../components/ui/Modal-list-nft/ModalListNFT'

const NftDetails = () => {
    const { id } = useParams()
    const [showModal, setShowModal] = useState(false)
    const [showListModal, setShowListModal] = useState(false)

    const sampleNft = {
        metadata: {
            title: 'title',
            media: 'https://bafybeihumkfixgyh43jqapvuq6gse4vs2rtclnbr2pwfxmsdg6ykplh2a4.ipfs.nftstorage.link/Screen%20Shot%202022-06-14%20at%2014.32.50.png',
            reference: 'https://youtube.com',
            description: 'description',
            extra: 'extra',
        },
        owner_id: 'owner_id',
        users: ['users'],
    }

    return (
        <>
            {sampleNft !== undefined && (
                <>
                    <CommonSection title={sampleNft.metadata.title} img={sampleNft.metadata.media} />
                    <section style={{ paddingTop: 30 }}>
                        <Container>
                            <Row>
                                <Col
                                    lg="8"
                                    md="12"
                                    sm="12"
                                    style={{
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                    }}
                                >
                                    <div className="single__nft__content">
                                        <div className=" d-flex align-items-center justify-content-between mt-4 mb-4">
                                            <div className=" d-flex align-items-center gap-3 single__nft-seen">
                                                <EyeTwoTone twoToneColor="#ffa500" /> <span>53</span>
                                                <HeartTwoTone twoToneColor="#eb2f96" /> <span>34</span>
                                                <CheckCircleTwoTone twoToneColor="#52c41a" /> <span>15</span>
                                            </div>

                                            <div className=" d-flex align-items-center gap-2 single__nft-more">
                                                <span>
                                                    <a href='https://youtube.com' target="_blank" rel="noreferrer">
                                                        <i class="ri-global-line"></i>
                                                    </a>
                                                </span>
                                                <span>
                                                    <i class="ri-send-plane-line"></i>
                                                </span>
                                                <span>
                                                    <i class="ri-discord-fill"></i>
                                                </span>
                                                <span>
                                                    <i class="ri-github-fill"></i>
                                                </span>
                                                <span>
                                                    <i class="ri-more-2-line"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="nft__creator d-inline-flex gap-3 align-items-center" style={{ display: 'inline' }}>
                                            <div className="creator__detail">
                                                <p>Owner</p>
                                                <h6>{sampleNft.owner_id}</h6>
                                            </div>
                                        </div>

                                        <h1
                                            style={{
                                                color: 'white',
                                                display: 'inline',
                                                marginLeft: 50,
                                                marginTop: 100,
                                            }}
                                        >
                                            0
                                        </h1>
                                        <h4
                                            style={{
                                                color: 'gray',
                                                display: 'inline',
                                                marginLeft: 15,
                                            }}
                                        >
                                            SOL
                                        </h4>

                                        <h1
                                            style={{
                                                color: 'white',
                                                display: 'inline',
                                                marginLeft: 20,
                                                marginTop: 100,
                                            }}
                                        >
                                            0
                                        </h1>
                                        <h4
                                            style={{
                                                color: 'gray',
                                                display: 'inline',
                                                marginLeft: 15,
                                            }}
                                        >
                                            SOL
                                        </h4>

                                        {(sampleNft.owner_id === window.accountId) && (
                                            <>
                                                <div style={{ marginTop: 50 }}>
                                                    <button
                                                        className="singleNft-btn d-inline-flex align-items-center gap-2 w-30"
                                                        style={{
                                                            float: 'left',
                                                            marginLeft: 380,
                                                            background: '#e250e5',
                                                        }}
                                                    >
                                                        <i className="ri-close-circle-line"></i>
                                                        Delist
                                                    </button>
                                                </div>
                                                <div
                                                    style={{
                                                        border: '0.2px solid #4d4e4f',
                                                        borderRadius: 20,
                                                        marginTop: 130,
                                                        marginBottom: -100,
                                                        paddingLeft: 40,
                                                        paddingRight: 40,
                                                    }}
                                                >
                                                    <h5
                                                        style={{
                                                            color: 'orange',
                                                            marginTop: 20,
                                                        }}
                                                    >
                                                        Offers
                                                    </h5>
                                                    <textarea
                                                        name=""
                                                        id="offers"
                                                        rows="3"
                                                        placeholder=""
                                                        className="w-100"
                                                        style={{
                                                            background: '#06102e',
                                                            border: 'none',
                                                            borderRadius: 10,
                                                            marginBottom: 10,
                                                        }}
                                                    ></textarea>
                                                </div>
                                            </>
                                        )}

                                        {(sampleNft.owner_id === window.accountId) && (
                                            <>
                                                <div className=" mt-3 d-flex align-items-center " style={{ marginBottom: '-80px', marginTop: 500 }}>
                                                    <button
                                                        className="bid__btn d-flex align-items-center gap-1"
                                                        style={{ marginLeft: 300 }}
                                                        onClick={() => setShowListModal(true)}
                                                    >
                                                        List
                                                    </button>

                                                    <button
                                                        className="bid__btn d-flex align-items-center gap-1"
                                                        style={{
                                                            marginLeft: 100,
                                                        }}
                                                        onClick={() => setShowModal(true)}
                                                    >
                                                        Transfer
                                                    </button>
                                                    {showModal && <ModalTransferNft setShowModal={setShowModal} token_id={id} />}
                                                    {showListModal && <ModalListNft setShowListModal={setShowListModal} token_id={id} />}
                                                </div>
                                            </>
                                        )}

                                        {sampleNft.owner_id !== window.accountId && (
                                            <div style={{ marginTop: 50 }}>
                                                <button
                                                    className="singleNft-btn d-inline-flex align-items-center gap-2 w-30"
                                                    style={{
                                                        float: 'left',
                                                        marginLeft: 200,
                                                    }}
                                                >
                                                    Buy
                                                </button>

                                                {sampleNft.users.includes(window.accountId) ? (
                                                    <>
                                                        <div
                                                            className=" d-inline-flex align-items-center gap-2 w-30"
                                                            style={{
                                                                float: 'right',
                                                                marginRight: 200,
                                                                marginTop: 5,
                                                                color: 'white',
                                                            }}
                                                        >
                                                            <CheckCircleTwoTone
                                                                twoToneColor="#52c41a"
                                                                style={{
                                                                    fontSize: 30,
                                                                }}
                                                            />{' '}
                                                            Using
                                                        </div>
                                                    </>
                                                ) : (
                                                    <button
                                                        className="singleNft-btn d-inline-flex align-items-center gap-2 w-30"
                                                        style={{
                                                            float: 'right',
                                                            marginRight: 200,
                                                        }}
                                                    >
                                                        Use
                                                    </button>
                                                )}

                                                <button
                                                    className="singleNft-btn d-inline-flex align-items-center gap-2 w-30"
                                                    style={{
                                                        float: 'right',
                                                        marginRight: 110,
                                                    }}
                                                    onClick={() => setShowModal(true)}
                                                >
                                                    Offer
                                                </button>

                                                {showModal && <Modal setShowModal={setShowModal} />}
                                            </div>
                                        )}

                                        <div
                                            style={{
                                                border: '0.2px solid #ffa500',
                                                borderRadius: 20,
                                                marginTop: 130,
                                                paddingLeft: 40,
                                                paddingRight: 40,
                                            }}
                                        >
                                            <h5
                                                style={{
                                                    color: 'orange',
                                                    marginTop: 30,
                                                }}
                                            >
                                                Description
                                            </h5>
                                            <p
                                                className="my-4"
                                                style={{
                                                    whiteSpace: 'pre-wrap',
                                                }}
                                            >
                                                {sampleNft.metadata.description}
                                            </p>
                                            <p style={{ display: 'inline' }}>Tags: </p>
                                            <p
                                                style={{
                                                    display: 'inline',
                                                    color: 'cyan',
                                                }}
                                            >
                                                {sampleNft.metadata.extra}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </>
            )}
            <hr style={{ color: 'white' }} />
        </>
    )
}

export default NftDetails