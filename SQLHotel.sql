USE [Hotel]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE TABLE [dbo].[Reservations](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DateOfReservation] [datetime2](7) NOT NULL,
	[StartReservation] [datetime2](7) NOT NULL,
	[EndReservation] [datetime2](7) NOT NULL,
	[IdOfUser] [int] NOT NULL,
	[IdOfRoom] [int] NOT NULL,
	[IsCanceled] [bit] NOT NULL,
	[IsAccepted] [bit] NOT NULL,
	[Price] [decimal](8, 2) NOT NULL
) ON [PRIMARY]


CREATE TABLE [dbo].[Rooms](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[NumberOfRoom] [int] NOT NULL,
	[NumberOfPeople] [int] NOT NULL,
	[NumberOfBeds] [int] NOT NULL,
	[Description] [varchar](500) NULL,
	[IsViewOnMountains] [bit] NULL,
	[IsBathroom] [bit] NULL,
	[IsToilet] [bit] NULL,
	[IsTv] [bit] NULL,
	[DayPrice] [decimal](6, 2) NULL,
	[UrlOfPhoto] [varchar](500) NULL
) ON [PRIMARY]


CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Surname] [varchar](50) NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[DateOfBirth] [datetime2](7) NOT NULL,
	[Username] [varchar](50) NOT NULL,
	[PasswordHash] [varbinary](max) NOT NULL,
	[PasswordSalt] [varbinary](max) NOT NULL,
	[Role] [varchar](50) NOT NULL,
	[Address] [varchar](200) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO


