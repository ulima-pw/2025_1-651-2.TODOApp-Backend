--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

-- Started on 2025-07-07 12:11:51

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3365 (class 0 OID 25040)
-- Dependencies: 222
-- Data for Name: Categoria; Type: TABLE DATA; Schema: public; Owner: todo
--

INSERT INTO public."Categoria" VALUES (1, 'UL', true);
INSERT INTO public."Categoria" VALUES (2, 'Chamba', true);


--
-- TOC entry 3361 (class 0 OID 24617)
-- Dependencies: 218
-- Data for Name: Usuario; Type: TABLE DATA; Schema: public; Owner: todo
--

INSERT INTO public."Usuario" VALUES (1, 'edgard', '1234');
INSERT INTO public."Usuario" VALUES (2, 'antonella', 'aaaa');


--
-- TOC entry 3363 (class 0 OID 24626)
-- Dependencies: 220
-- Data for Name: InfPersonal; Type: TABLE DATA; Schema: public; Owner: todo
--



--
-- TOC entry 3359 (class 0 OID 16404)
-- Dependencies: 216
-- Data for Name: Todo; Type: TABLE DATA; Schema: public; Owner: todo
--

INSERT INTO public."Todo" VALUES (1, 'Estudiar para el examen teorico', false, NULL, NULL);
INSERT INTO public."Todo" VALUES (2, 'Cocinar almuerzo', true, NULL, NULL);


--
-- TOC entry 3366 (class 0 OID 25048)
-- Dependencies: 223
-- Data for Name: _CategoriaXUsuario; Type: TABLE DATA; Schema: public; Owner: todo
--

INSERT INTO public."_CategoriaXUsuario" VALUES (1, 1);
INSERT INTO public."_CategoriaXUsuario" VALUES (2, 1);
INSERT INTO public."_CategoriaXUsuario" VALUES (1, 2);



--
-- TOC entry 3372 (class 0 OID 0)
-- Dependencies: 221
-- Name: Categoria_id_seq; Type: SEQUENCE SET; Schema: public; Owner: todo
--

SELECT pg_catalog.setval('public."Categoria_id_seq"', 2, true);


--
-- TOC entry 3373 (class 0 OID 0)
-- Dependencies: 219
-- Name: InfPersonal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: todo
--

SELECT pg_catalog.setval('public."InfPersonal_id_seq"', 1, false);


--
-- TOC entry 3374 (class 0 OID 0)
-- Dependencies: 215
-- Name: Todo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: todo
--

SELECT pg_catalog.setval('public."Todo_id_seq"', 2, true);


--
-- TOC entry 3375 (class 0 OID 0)
-- Dependencies: 217
-- Name: Usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: todo
--

SELECT pg_catalog.setval('public."Usuario_id_seq"', 2, true);


-- Completed on 2025-07-07 12:11:52

--
-- PostgreSQL database dump complete
--

