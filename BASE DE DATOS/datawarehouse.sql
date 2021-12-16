-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-12-2021 a las 00:52:19
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `datawarehouse`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canales`
--

CREATE TABLE `canales` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `canales`
--

INSERT INTO `canales` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'WhatsApp', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Instagram', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id` int(11) NOT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `provinciaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id`, `ciudad`, `createdAt`, `updatedAt`, `provinciaId`) VALUES
(1, 'LA PLATA', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(3, 'San Fernando del Valle de Catamarca', '2021-12-15 02:42:08', '2021-12-15 02:42:08', 2),
(4, 'Resistencia', '2021-12-15 02:42:53', '2021-12-15 02:42:53', 3),
(5, 'chubut', '2021-12-15 02:43:43', '2021-12-15 02:43:43', 3),
(6, 'Córdoba', '2021-12-15 02:46:02', '2021-12-15 02:46:02', 4),
(7, 'Corrientes', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 5),
(8, 'Parana', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 6),
(9, 'Formosa', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 7),
(10, 'San Salvador de Jujuy', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 8),
(11, 'Santa Rosa', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 9),
(12, 'La Rioja', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 10),
(13, 'Mendoza', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 11),
(14, 'Posadas', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 12),
(15, 'Neuquén', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 13),
(16, 'Viedma', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 14),
(17, 'Salta', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 15),
(18, 'San Juan', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 16),
(19, ' San Luis', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 17),
(20, 'Río Gallegos', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 18),
(21, 'Santa Fe', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 19),
(22, 'Santiago del Estero', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 20),
(23, ' Ushuaia', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 22),
(24, ' Ushuaia', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 21),
(25, 'San Miguel de Tucumán', '2021-12-15 02:46:37', '2021-12-15 02:46:37', 23);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `companias`
--

CREATE TABLE `companias` (
  `id` int(11) NOT NULL,
  `compania` varchar(255) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `paiseId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `companias`
--

INSERT INTO `companias` (`id`, `compania`, `numero`, `createdAt`, `updatedAt`, `paiseId`) VALUES
(14, 'Arcor', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(15, ' Bunge & Born', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(16, ' Cervecería Quilmes', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(17, ' La Serenísima', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(18, ' Molinos Río de la Plata', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(19, ' SanCor', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(20, ' Cervecería Schneider', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(21, ' Al Este Bodega y Viñedos', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(22, ' Balcarce', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(23, ' Bun', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(24, ' Café Martínez', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(25, ' Cunnington', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(26, ' Felfort', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(27, ' Freddo', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(28, ' Georgalos', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(29, ' Alimentos Granix', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(30, ' La Martona', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(31, ' Pumper Nic', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(32, ' Mostaza', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(33, ' Sasetru S.A.', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(34, ' Grido Helado', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(35, ' Grupo Ledesma', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(36, ' Havanna', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(37, ' Marolio', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(38, ' Milkaut', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(39, ' Morixe Hermanos S.A.C.I.', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(40, ' Aroma Café', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(41, ' Topper', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(42, ' 47 Street', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(43, ' Delmar', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(44, ' Kosiuko', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(45, ' La Martina', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(46, ' Ossira', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(47, ' Aero Boero', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(48, ' AeroDreams S.A.', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(49, ' Chincul SACAIFI', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(50, ' Cicaré S.A. Helicópteros', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(51, ' Zanella', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(52, ' Motomel', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(53, ' Pauny S.A.', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(54, ' Industrias Kaiser Argentina S.A', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(55, ' Cormec Córdoba Mecánica S.A.', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(56, ' Ford Motor Argentina', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(57, ' General Motors de Argentina', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(58, ' Tecnología Avanzada en Transporte S.A.', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(59, ' Araus Hnos. S.A.I.C.F.A.I', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(60, ' Astilleros Argentinos Río de La Plata S.A.', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(61, ' Vassalli Fabril', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(62, ' Agrinar', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(63, ' ASA Aluminium Body', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(64, ' Bernadin', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(65, ' FAdeA', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(66, ' CITEDEF', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(67, ' Agencia I+D+i', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(68, ' CONICET', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(69, ' ANLIS', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(70, ' BNDG', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(71, ' CNEA', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(72, ' CONAE', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(73, ' Instituto de Investigaciones Científicas y Técnicas para la Defensa', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(74, ' FAN', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(75, ' Fundación Dr. Manuel Sadosky', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(76, ' INTA', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(77, ' Pixart', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(78, ' Bridas Corporation', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(79, ' Tecpetrol', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(80, ' Transportadora de Gas del Sur', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(81, ' Ecogas', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(82, ' Transener', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(83, ' Pampa Energy', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(84, ' Edelap', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(85, ' Edenor', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(86, ' YPF', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(87, ' IEASA', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(88, ' IMPSA', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(89, ' INVAP', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(90, ' EDEA', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(91, ' Acindar', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(92, ' ALUAR', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(93, ' Bersa S.A.', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(94, ' Ítalo Percossi e Hijos', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(95, ' Techint', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(96, ' DGFM', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(97, ' FaSinPat', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(98, ' Loma Negra', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(99, ' LATAM Argentina', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(100, ' Aerolíneas Argentinas', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(101, ' Flybondi', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(102, ' Norwegian Air Argentina', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(103, ' Avianca Argentina', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(104, ' Aero VIP', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(105, ' Austral Línea Aéreas', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(106, ' LADE', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(107, ' Líneas Aéreas Federales', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(108, ' Líneas Aéreas Privadas', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(109, ' La Veloz del Norte', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(110, ' SEMTUR', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(111, ' Movi', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(112, ' Nueva Chevallier S.A.', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(113, ' Flecha Bus', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(114, ' Belgrano Cargas', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(115, ' Ferrocarriles Argentinos', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(116, ' Nuevo Central Argentino', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(117, ' Ferrocarril Central Córdoba', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(118, ' Ferrobaires', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(119, ' Servicios de Transportes Aéreos Fueguinos', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(120, ' Ferrocentral', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(121, ' Ferrovías', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(122, ' Ferroexpreso Pampeano', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(123, ' Ferrosur Roca', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(124, ' Metrovías', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(125, ' Trenes de Buenos Aires', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(126, ' Banco de la Nación Argentina', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(127, ' Banco de la Provincia de Buenos Aires', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(128, ' Banco de la Ciudad de Buenos Aires', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(129, ' Banco de Córdoba', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(130, ' Banco Municipal de Rosario', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(131, ' Banco Macro', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(132, ' Banco Santander', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(133, ' BBVA Argentina', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(134, ' Banco Supervielle', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(135, ' Banco Credicoop', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(136, ' Grupo Financiero Galicia', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(137, ' Banelco', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(138, ' Red Link', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(139, ' MercadoLibre', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1),
(140, '', 801044, '2021-12-15 03:54:47', '2021-12-15 03:54:47', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactocanales`
--

CREATE TABLE `contactocanales` (
  `Id` int(11) NOT NULL,
  `datosCanales` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `contactoId` int(11) DEFAULT NULL,
  `canaleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `interes` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `paiseId` int(11) DEFAULT NULL,
  `provinciaId` int(11) DEFAULT NULL,
  `ciudadeId` int(11) DEFAULT NULL,
  `companias` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id` int(11) NOT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `pais`, `createdAt`, `updatedAt`) VALUES
(1, 'Argentina', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id` int(11) NOT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `paiseId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id`, `provincia`, `createdAt`, `updatedAt`, `paiseId`) VALUES
(1, 'BUENOS AIRES', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(2, 'Catamarca', '2021-12-15 02:41:25', '2021-12-15 02:41:25', 1),
(3, 'Chaco', '2021-12-15 02:42:35', '2021-12-15 02:42:35', 1),
(4, 'Córdoba', '2021-12-15 02:45:47', '2021-12-15 02:45:47', 1),
(5, 'Corrientes', '2021-12-15 02:46:18', '2021-12-15 02:46:18', 1),
(6, 'Entre Ríos', '2021-12-15 02:46:57', '2021-12-15 02:46:57', 1),
(7, 'Formosa', '2021-12-15 02:47:06', '2021-12-15 02:47:06', 1),
(8, 'Jujuy', '2021-12-15 02:47:11', '2021-12-15 02:47:11', 1),
(9, 'La Pampa', '2021-12-15 02:47:16', '2021-12-15 02:47:16', 1),
(10, 'La Rioja', '2021-12-15 02:47:23', '2021-12-15 02:47:23', 1),
(11, 'Mendoza', '2021-12-15 02:47:30', '2021-12-15 02:47:30', 1),
(12, 'Misiones', '2021-12-15 02:48:16', '2021-12-15 02:48:16', 1),
(13, 'Neuquén', '2021-12-15 02:48:21', '2021-12-15 02:48:21', 1),
(14, 'Río Negro', '2021-12-15 02:48:32', '2021-12-15 02:48:32', 1),
(15, 'Salta', '2021-12-15 02:48:38', '2021-12-15 02:48:38', 1),
(16, 'San Juan', '2021-12-15 02:48:45', '2021-12-15 02:48:45', 1),
(17, 'San Luis', '2021-12-15 02:48:50', '2021-12-15 02:48:50', 1),
(18, 'Santa Cruz', '2021-12-15 02:48:55', '2021-12-15 02:48:55', 1),
(19, 'Santa Fe', '2021-12-15 02:49:01', '2021-12-15 02:49:01', 1),
(20, 'Santiago del Estero', '2021-12-15 02:49:07', '2021-12-15 02:49:07', 1),
(21, 'Tierra del Fuego', '2021-12-15 02:55:27', '2021-12-15 02:55:27', 1),
(22, ' Antártida e Isla del Atlántico Sur', '2021-12-15 02:55:27', '2021-12-15 02:55:27', 1),
(23, 'Tucumán', '2021-12-15 02:55:37', '2021-12-15 02:55:37', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `codigo`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 'ADMINISTRADOR', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, NULL, 'MARKETING', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, NULL, 'COMERCIAL', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, NULL, 'TELE COMUNICACIONES', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, NULL, 'VENTAS', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, NULL, 'ADMINISTRACION', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, NULL, 'CONTABLE', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, NULL, 'DEVELOPER', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, NULL, 'SISTEMAS', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `username`, `email`, `password`, `createdAt`, `updatedAt`, `roleId`) VALUES
(1, '\"\"', '\"\"', 'admin', 'admin', 'admin', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(4, 'ezequiel', 'rey', 'ezequiel', 'eze.rey@gmail.com', 'ezequiel', '2021-12-15 02:31:28', '2021-12-15 02:31:28', 8);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `canales`
--
ALTER TABLE `canales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `provinciaId` (`provinciaId`);

--
-- Indices de la tabla `companias`
--
ALTER TABLE `companias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `paiseId` (`paiseId`);

--
-- Indices de la tabla `contactocanales`
--
ALTER TABLE `contactocanales`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `contactoCanales_contactoId_canaleId_unique` (`contactoId`,`canaleId`),
  ADD KEY `canaleId` (`canaleId`);

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `paiseId` (`paiseId`),
  ADD KEY `provinciaId` (`provinciaId`),
  ADD KEY `ciudadeId` (`ciudadeId`),
  ADD KEY `companias` (`companias`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `paiseId` (`paiseId`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `canales`
--
ALTER TABLE `canales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `companias`
--
ALTER TABLE `companias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT de la tabla `contactocanales`
--
ALTER TABLE `contactocanales`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `paises`
--
ALTER TABLE `paises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD CONSTRAINT `ciudades_ibfk_1` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_10` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_11` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_12` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_13` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_14` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_15` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_16` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_17` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_18` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_19` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_2` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_20` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_21` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_22` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_23` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_24` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_25` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_26` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_27` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_28` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_29` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_3` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_30` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_4` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_5` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_6` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_7` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_8` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_9` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `companias`
--
ALTER TABLE `companias`
  ADD CONSTRAINT `companias_ibfk_1` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_10` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_11` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_12` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_13` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_14` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_15` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_2` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_3` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_4` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_5` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_6` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_7` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_8` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `companias_ibfk_9` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `contactocanales`
--
ALTER TABLE `contactocanales`
  ADD CONSTRAINT `contactocanales_ibfk_1` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_10` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_11` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_12` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_13` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_14` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_15` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_16` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_17` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_18` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_19` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_2` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_20` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_21` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_22` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_23` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_24` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_25` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_26` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_27` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_28` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_29` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_3` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_30` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_31` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_32` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_33` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_34` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_35` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_36` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_37` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_38` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_39` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_4` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_40` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_41` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_42` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_43` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_44` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_45` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_46` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_47` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_48` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_49` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_5` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_50` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_51` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_52` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_53` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_54` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_55` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_56` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_57` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_6` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_7` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_8` FOREIGN KEY (`canaleId`) REFERENCES `canales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contactocanales_ibfk_9` FOREIGN KEY (`contactoId`) REFERENCES `contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD CONSTRAINT `contactos_ibfk_1` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_10` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_100` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_101` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_102` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_103` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_104` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_105` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_106` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_107` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_108` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_109` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_11` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_110` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_111` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_112` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_113` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_114` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_115` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_116` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_12` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_13` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_14` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_15` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_16` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_17` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_18` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_19` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_2` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_20` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_21` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_22` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_23` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_24` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_25` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_26` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_27` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_28` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_29` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_3` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_30` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_31` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_32` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_33` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_34` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_35` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_36` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_37` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_38` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_39` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_4` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_40` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_41` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_42` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_43` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_44` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_45` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_46` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_47` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_48` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_49` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_5` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_50` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_51` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_52` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_53` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_54` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_55` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_56` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_57` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_58` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_59` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_6` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_60` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_61` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_62` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_63` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_64` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_65` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_66` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_67` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_68` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_69` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_7` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_70` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_71` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_72` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_73` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_74` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_75` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_76` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_77` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_78` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_79` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_8` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_80` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_81` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_82` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_83` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_84` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_85` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_86` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_87` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_88` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_89` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_9` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_90` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_91` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_92` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_93` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_94` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_95` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_96` FOREIGN KEY (`companias`) REFERENCES `companias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_97` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_98` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contactos_ibfk_99` FOREIGN KEY (`ciudadeId`) REFERENCES `ciudades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD CONSTRAINT `provincias_ibfk_1` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_10` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_11` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_12` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_13` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_14` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_15` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_16` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_17` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_18` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_19` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_2` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_20` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_21` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_22` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_23` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_24` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_25` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_26` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_27` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_28` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_29` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_3` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_30` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_4` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_5` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_6` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_7` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_8` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `provincias_ibfk_9` FOREIGN KEY (`paiseId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_10` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_11` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_12` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_13` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_14` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_15` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_16` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_17` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_18` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_19` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_20` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_21` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_22` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_23` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_24` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_25` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_26` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_27` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_28` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_4` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_5` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_6` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_7` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_8` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_9` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
