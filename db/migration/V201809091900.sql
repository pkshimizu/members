create table talent
(
  id         int auto_increment primary key,
  name       varchar(16)  not null,
  kana       varchar(16)  not null,
  position   varchar(16)  null,
  department varchar(16)  not null,
  mail       varchar(64)  not null,
  slack      varchar(64)  null,
  photo      varchar(128) null,
  seat_x     int          not null,
  seat_y     int          not null,
  status     varchar(16)  not null
);
