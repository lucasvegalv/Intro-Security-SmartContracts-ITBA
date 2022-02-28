# Introducción a Hacking y Seguridad en Smart Contracts

Este repositorio fue descargado para poder realizar los ejercicios que nos brindó Martin en el curso introductorio a seguridad de smart contracts llevado a cabo por CS ITBA (https://youtu.be/sqjHodAj5Xc?list=PLTqiwJDd_R8yHOvteko_DmUxUTMHnlfci).

El repositorio está dividido por ejercicios. Cada ejercicio consta de un conjunto de archivos Solidity (ubicados en las respectivas carpeta `contracts/ejercicio-x`) y JavaScript (ubicados en las respectivas carpetas `test/ejercicio-x`).

Los archivos Solidity son contratos con alguna vulnerabilidad a ser explotada. Los archivos JavaScript son los tests que se encargan de  explotar esas vulnerabilidades.

Al resolver todos los ejercicios, aprendí sobre cómo identificar, atacar y solucionar algunos tipos de vulnerabilidades como:

- Fallas en controles de acceso
- Operaciones matemáticas inseguras
- Denegación de Servicio
- Reentrancy

Además, en el proceso, aprendí sobre:

- Cómo hacer revisión de código Solidity.
- Cómo interactuar con contratos desde tus tests.
- Cómo hacer debugging.
- Patrones comunes como Ownable, Safe Math y Check-Effects-interactions.
- Peculiaridades de funciones de Solidity.
- La importancia del gas y su correcto uso.
- EOAs vs. Contratos.
- Llamadas entre contratos, tanto a funciones como para enviar ETH.
- Primitivas de DeFi, como los flash loans.

