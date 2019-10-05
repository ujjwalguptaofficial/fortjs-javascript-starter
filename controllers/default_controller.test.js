import { DefaultController } from "./default_controller";
import { viewResult, Fort } from "fortjs";
import { createApp } from "../index";

describe('DefaultController', () => {
    let app;
    let controller;
    beforeAll(async () => {
        app = await createApp();
        controller = new DefaultController();
    });

    it('index', async () => {
        const expectedResult = await viewResult('default/index.html', {
            title: 'FortJs'
        });
        const indexMethodOutput = await controller.index('FortJs');
        expect(indexMethodOutput).toEqual(expectedResult);
    });

    afterAll(() => {
        return app.destroy();
    });
});