import styled from "styled-components";
import {useEffect} from "react";

export const Home = function () {

    // Set title.
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <>
            <HomePage>
                <ContentHome />
                    <div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deserunt in maxime
                            nulla possimus praesentium quam rerum tenetur! Atque doloremque esse incidunt laudantium
                            molestias qui quia quos sit suscipit velit.
                        </div>
                        <div>Ad adipisci culpa distinctio, expedita incidunt minus quas quibusdam rem! Ab beatae commodi
                            doloribus fuga hic itaque iusto minima natus nihil nulla officia, saepe sapiente, sequi sit
                            unde vero voluptates.
                        </div>
                        <div>Eaque, et harum hic mollitia rerum soluta voluptatum. Blanditiis dicta eaque inventore nisi
                            odit. Aperiam excepturi labore veritatis! Animi dolorem, est exercitationem magni nihil
                            nulla quo repellat sunt temporibus tenetur.
                        </div>
                        <div>Ab doloremque illum ipsa odio sit tempore veniam. Accusamus, accusantium, aliquid
                            aspernatur at consectetur distinctio dolore excepturi fugiat id illo illum incidunt ipsum
                            itaque odio omnis quae rerum tempora. Accusantium!
                        </div>
                        <div>Ea earum laudantium minima placeat, reprehenderit vero voluptas. Ad debitis eius
                            exercitationem facilis, magni perspiciatis vel? Debitis illo neque officia suscipit!
                            Corporis cum fugiat maxime modi saepe similique sunt? Illum?
                        </div>
                    </div>
            </HomePage>
        </>
    );
};

const HomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentHome = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
`;