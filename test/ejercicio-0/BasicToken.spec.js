const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Ejercicio 0", function () {
    // Cantidad inicial de 1 millón de tokens (1000000 * 10^18)
    const INITIAL_SUPPLY = ethers.utils.parseUnits('1000000', 'ether');
    
    let token;
    let deployer, user, user2;

    beforeEach(async function () {
        [deployer, user, user2] = await ethers.getSigners();

        const BasicToken = await ethers.getContractFactory("BasicToken", deployer);

        token = await BasicToken.deploy(INITIAL_SUPPLY);

        await token.deployed();
    });

    describe("Inicialización", function () {
        it('La cuenta minter es el deployer', async function () {
            // COMPLETAR
            expect(await token.minter()).to.eq(deployer.address)
        });

        it('El total supply del token es el esperado', async function () {
            expect(await token.totalSupply()).to.eq(INITIAL_SUPPLY)
        });

        it('Todo el total supply es asignado al deployer', async function () {
            expect(await token.balanceOf(deployer.address)).to.eq(INITIAL_SUPPLY);
        });
    });

    describe("Transferencias", function() {
        it('Un usuario sin fondos no puede transferir', async function () {
            expect(await token.balanceOf(user.address)).to.eq(0);
            await expect(
            token.connect(user).transfer(user2.address, 1)
            ).to.be.reverted;
        });

        it('Un usuario con fondos puede transferir', async function () {
            expect(await token.balanceOf(deployer.address)).to.be.gt(0);
            await token.transfer(user.address, 1);
            expect(await token.balanceOf(user.address)).to.eq(1);
        });
    });

    describe("Minting", function() {
        it('Un usuario sin permisos no puede mintear tokens', async function () {
            // COMPLETAR
            await expect(token.connect(user).mint(user.address, 1)).to.be.reverted;
        });

        it('Un usuario con permisos puede mintear tokens', async function () {
            // COMPLETAR
            await token.mint(deployer.address, 1)
        });
    });
});
