-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: drone
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `file_size` varchar(255) DEFAULT NULL,
  `file_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
INSERT INTO `documents` VALUES (1,'drone1.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone1.jpg','image/jpeg','655630'),(2,'drone2.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone2.jpg','image/jpeg','764836'),(3,'drone3.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone3.jpg','image/jpeg','988952'),(4,'drone4.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone4.jpg','image/jpeg','910761'),(5,'drone5.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone5.jpg','image/jpeg','665086'),(6,'drone6.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone6.jpg','image/jpeg','192650'),(7,'drone7.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone7.jpg','image/jpeg','231731'),(8,'drone7.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone7.jpg','image/jpeg','231731'),(9,'drone10.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone10.jpg','image/jpeg','175143'),(10,'drone9.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone9.jpg','image/jpeg','125168'),(11,'drone3.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone3.jpg','image/jpeg','988952'),(12,'drone6.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\drone6.jpg','image/jpeg','192650'),(13,'medicine1.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\medicine1.jpg','image/jpeg','12966'),(14,'medicine2.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\medicine2.jpg','image/jpeg','2097246'),(15,'medicine3.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\medicine3.jpg','image/jpeg','739930'),(16,'medicine4.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\medicine4.jpg','image/jpeg','9983'),(17,'medicine5.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\medicine5.jpg','image/jpeg','14658'),(18,'medicine6.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\medicine6.jpg','image/jpeg','224402'),(19,'medicine7.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\medicine7.jpg','image/jpeg','17460'),(20,'medicine8.jpg','C:\\Users\\ESPUSR\\Documents\\commerce\\DEV_DRONES-d39aa1b2-07d9-365b-621e-2959e096deba\\uploads\\drones\\medicine8.jpg','image/jpeg','8844');
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drone`
--

DROP TABLE IF EXISTS `drone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drone` (
  `id` bigint NOT NULL,
  `batter_capacity` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `model` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `serial_number` varchar(255) DEFAULT NULL,
  `state` int DEFAULT NULL,
  `weight_limit` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drone`
--

LOCK TABLES `drone` WRITE;
/*!40000 ALTER TABLE `drone` DISABLE KEYS */;
INSERT INTO `drone` VALUES (1,80,'Aut aut sit quis eaq','drone1.jpg',1,'AeroSwift','670',3,255),(2,29,'Magnam irure recusan','drone2.jpg',3,'SkyHawk','833',3,476),(3,59,'Aut anim asperiores ','drone3.jpg',0,'FalconEye','372',0,438),(4,85,'Et autem architecto ','drone4.jpg',0,'Phantom-X','394',0,338),(5,45,'Esse sit aute non ','drone5.jpg',0,'NimbusX','706',0,400),(6,77,'Maxime at lorem veri','drone6.jpg',1,'VortexDrone','81',0,57),(7,24,'Est sit ullam volup','drone7.jpg',0,'ThunderBolt','57',0,320),(8,22,'Ab ut delectus labo','drone7.jpg',2,'ShadowHawk','567',0,102),(9,42,'Eveniet inventore m','drone10.jpg',1,'VortexDrone V2','88',0,500),(10,74,'Ad dolor eaque rerum','drone9.jpg',1,'Tate Wagner','845',0,448),(11,86,'Labore aliquid aut e','drone3.jpg',0,'Tanner Roach','263',0,437),(12,55,'Aliqua Harum aliqua','drone6.jpg',1,'Philip Franklin','412',0,475);
/*!40000 ALTER TABLE `drone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drone_medications_carried`
--

DROP TABLE IF EXISTS `drone_medications_carried`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drone_medications_carried` (
  `drone_id` bigint NOT NULL,
  `medications_carried_id` bigint NOT NULL,
  KEY `FKduw6miomsinhstfx803ym6ekl` (`medications_carried_id`),
  KEY `FKt9dsdef6fbjq730lk9f7rqc8q` (`drone_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drone_medications_carried`
--

LOCK TABLES `drone_medications_carried` WRITE;
/*!40000 ALTER TABLE `drone_medications_carried` DISABLE KEYS */;
INSERT INTO `drone_medications_carried` VALUES (1,13),(1,15),(1,17),(2,17),(2,19),(2,18);
/*!40000 ALTER TABLE `drone_medications_carried` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (30);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medication`
--

DROP TABLE IF EXISTS `medication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medication` (
  `id` bigint NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `weight` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medication`
--

LOCK TABLES `medication` WRITE;
/*!40000 ALTER TABLE `medication` DISABLE KEYS */;
INSERT INTO `medication` VALUES (13,'3243r32r5','Nulla ut irure laboriosam accusamus consequuntur corrupti quia proident','medicine1.jpg','Aspirin',25),(14,'323434','Ex id veniam et blanditiis deleniti irure dolor sunt non harum sint et cupiditate cupidatat optio mollit unde eius quia','medicine2.jpg','Ibuprofen',68),(15,'234343','Sequi rerum eum ea deserunt tempore pariatur','medicine3.jpg','Paracetamol',24),(16,'43434rr2','Beatae sed quia officiis quia rem libero porro eos fugit aut et aliquid','medicine4.jpg','Amoxicillin',51),(17,'243434','Reprehenderit in magna vero quia sunt ea velit officiis et natus omnis at lorem et maiores dolore sunt','medicine5.jpg','Omeprazole',121),(18,'2343435456','Laborum nisi voluptate non quae ipsum','medicine6.jpg','Atorvastatin',49),(19,'32435546','Veniam autem sunt enim commodo vero in suscipit proident occaecat debitis autem possimus','medicine7.jpg','Metformin',224),(20,'343546','Repudiandae enim elit voluptatem commodo doloremque','medicine8.jpg','Fluoxetine',59);
/*!40000 ALTER TABLE `medication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_entity`
--

DROP TABLE IF EXISTS `order_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_entity` (
  `id` bigint NOT NULL,
  `quantity` int NOT NULL,
  `total_weight` int NOT NULL,
  `drone_id` bigint DEFAULT NULL,
  `medication_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjudjyc62vwmmby7oclk21a9xa` (`drone_id`),
  KEY `FKlxmwswnl15vuxhnds8hxdmmal` (`medication_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_entity`
--

LOCK TABLES `order_entity` WRITE;
/*!40000 ALTER TABLE `order_entity` DISABLE KEYS */;
INSERT INTO `order_entity` VALUES (25,1,224,7,19),(24,1,51,7,16);
/*!40000 ALTER TABLE `order_entity` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-02 15:12:12
