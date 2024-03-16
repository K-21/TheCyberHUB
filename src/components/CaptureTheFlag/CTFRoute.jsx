import React from "react";
import { Route, Routes } from "react-router-dom";
import { CertificateCard, CTF, NotFound } from "src/components/index";
import CreateCTF from "./CreateCTF";
import MainPage from "./CtFPage/MainPage";

const CtfRoute = () => {
    return (
        <Routes>
            <Route index element={<CTF />} />
            <Route path={":type/:difficulty/:ctfId"} element={<MainPage />} />
            <Route path={"create"} element={<CreateCTF />} />
            <Route path={"certificate/:id"} element={<CertificateCard />} />
            <Route path={"*"} element={<NotFound />} />
        </Routes>
    );
};

export default CtfRoute;
