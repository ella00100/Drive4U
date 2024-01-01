<div align="center">

# Drive4U
<img width="1000" alt="image" src="https://github.com/ella00100/Drive4U/assets/103167624/1a5f8010-75e6-4506-8552-e768a32417b1">
<img width="1000" alt="image" src="https://github.com/ella00100/Drive4U/assets/103167624/dbb23a9b-c351-4d76-987d-f5f608e7de09">


</div>

&nbsp;

<!-- ABOUT THE PROJECT -->
## About The Project

Project Duration: September 01, 2023 - December 22, 2023

본 프로젝트는 IMU센서로부터 취득된 데이터를 이용해 운전자의 위험 운전 수준을 판단하고, 이를 통해 주행 마이데이터 솔루션을 제공하는 스마트드라이버 케어 솔루션을 구축하였다. 
또한, 렌트카 업체의 효율적 차량 및 고객관리를 지원하는 통합 관제 시스템을 구축하였다. 이를 통해 고객들에게 자신의 위험 운전 습관을 시각적으로 제시함으로써 안전한 운전생활을 유도하고, 이로써 차량 관리 비용을 감소시키고 렌트카 업체의 고객 관리 효율성을 향상시키는데 기여할 것이다. 

&nbsp;

<!-- Built with -->
## Built With
<img src="https://img.shields.io/badge/Arduino-00878F?style=for-the-badge&logo=arduino&logoColor=white">
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=yellow">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=black">
<img src="https://img.shields.io/badge/MySQl-4479A1?style=for-the-badge&logo=mysql&logoColor=yellow">

&nbsp;

### Key Feature
- **운전자의 주행 습관 분석:** 센서 장치를 활용하여 실시간 주행 데이터 및 챠량 환경 데이터를 수집하고 이를 분석하여 운전자의 종합적 주행습관을 분석한다.
  
- **위험 운전 감지 알고리즘:** 수집한 데이터를 기반으로 급가속, 급감속, 사행 운전 세가지 상황을 감지한다. 
  
- **MyData Solution:** 대시보드를 활용하여 운전자가 자신의 주행 습관을 시각적으로 파악하고, 개인화된 피드백을 제공받을 수있는 맞춤형 솔루션을 제공한다.
  
- **Integrated Control System:** 대시보드를 활용하여 렌트카 업체가 차량 및 고객 데이터를 효과적으로 종합 관리하고, 운영을 효율적으로 감독할 수 있는 통합 관제 시스템을 제공한다.

- **안전 운전 보상 시스템:** 운전자들 간의 안전한 주행을 격려하기 위해 경쟁을 유도하고, 주행 수준을 분석하여 운전자마다 차등괸 렌트비를 부여하여 안전 주행을 촉진시킨다.   
  

&nbsp;

## System Architecture
<img width="1000" alt="image" src="https://github.com/ella00100/Drive4U/assets/103167624/2d5fbede-5ae5-4370-a357-bff11cc93dde">

1) Arduino Nano 33 BLE Sense를 통해 실시간 주행 및 차량 환경 데이터를 수집하고 이 데이터를 WiFi 모듈을 통해 웹 서버로 전송

2) 취득된 데이터가 서버에 들어오면, 위험 운전 감지 알고리즘이 동작하며 결과를 데이터 베이스에 저장

3) 위험 운전 감지 알고리즘 결과가 업데이트 되면 해당 결과를 기반으로 고객의 주행 점수 및 안전 운전 수준이 업데이트 되며 이에 따른 렌탈비가 재측정 됨

4) WISE-PaaS 대시보드는 MySql 데이터 베이스와 연동되며 수집한 데이터를 실시간으로 분석 및 시각화
   - 운전자(고객)에게 맞춤형 운전 습관 분석 데이터 및 실시간 차량 환경 데이터 시각화하여 제공
   - 렌트카 업체에게 차량 및 고객 통합 관리 및 위험 상황 알림 기능 제공


&nbsp;

## ERD
<img width="1000" alt="image" src="https://github.com/ella00100/Drive4U/assets/103167624/99e9b9e7-072a-42b5-86c5-9403e65d35ad">

1) 렌트카 직원(employee) 정보는 employee talble을 통해 관리되며, 직원의 로그인 정보 등을 저장함. 렌트카 직원은 차량을 등록하고 관리함

2) 차량 정보는 Car table을 통해 관리되며 차량 번호, 등록일, 차종, 렌트가격, 차량 상태 정보 등을 저장함

3) 하나의 차량에는 하나의 센서가 연결되어 있음. 센서 정보는 Sensordata table을 통해 관리되며 측정 시간, 가속도 3축, 자이로 3축, 데시벨, 온도, 습도 정보를 저장함

4) 고객 정보는 Customers table을 통해 관리되며, 고객의 로그인 정보 및 가입 날짜, 운전 점수, 총 주행 시간과 안전 운전 수준 정보를 저장함

5) 고객은 렌트카 업체에 등록된 차량을 대여할 수 있으며 대여 정보는 Rentals table을 통해 관리됨. rentals table은 고객 ID, 차량 번호 정보와 대여 시작 시간과 반납 시간을 저장함

6) 대여 기간 동안 측정된 운전 정보는 DriveList table을 통해 관리되며 Drivelist table은 총 주행 거리와 급가속, 급감속, 사행 운전 감지 횟수 정보를 저장함. 이 데이터를 통해 해당 고객의       주행 점수 및 안전 운전 수준 정보가 업데이트 됨


## 운전자를 위한 MyData Solution
<img width="592" alt="image" src="https://github.com/ella00100/Drive4U/assets/103167624/1b7ebb29-58d6-48f8-aec7-2fa19cb44d24">
1) 운전자 운전 습관 평가: 운전점수, 백분율, 및 등급으로 운전자의 안전 운전 수준 정밀 평가)
2) 스마트 운전자케어 솔루션: 운전 패턴의 체계적 분석을 통한 조언 제공, 안전 운전에 따른 다양한 보상 혜택 안내
3) 차종별 운전자 운전점수 비교: 각 차종에 대한 운전점수 평균과 상대적인 순위를 제시하여 차량별 운전 성향을 분석
4) 운전점수 변화 추이 분석
5) 위험운전 비율 분석: 데이터 분석을 기반으로 운전자의 위험운전 행동 정량화 및 평가
6) 등급별 렌탈 비용 & 예약 가능 차량 조회
7) 차량 내부 환경 모니터링: 온도, 습도, 데시벨 등의 환경 데이터를 수집을 통한 실시간 차량 환경 상태 모니터링

## 런트카 업체를 위한 통합 관리 Platform
<img width="725" alt="image" src="https://github.com/ella00100/Drive4U/assets/103167624/04a17010-73d5-4494-8456-eaa26c85a47c">
1) 차량 정보 및 사용/정비 상태: 정비 상태를 포함한 종합적인 차량 정보 접근 및 관리
2) 인기 있는 차종 및 렌탈 피크 타임 분석: 데이터 분석을 통한 렌탈 수요 트렌드를 표시하여 피크 시간에 자원 할당을 위한 전략적 계획 지원
3) 운전 레벨 비율 및 추이 분석: 변화하는 운전자의 레벨 비율에 따른 신속한 리스트 인식 및 효과적인 리스크 관리 전략을 수립 가능
4) 고객 정보 통합 관리 및 안전/위험 랭킹 정보 제공: 운전자의 주행 습관을 정량화 및 우수한 운전자에 대한 인센티브를 제공
5) 과속 및 높은 데시벨 알람 모니터링: 반복적인 과속과 90db이상 데시벨 감지 상황 동시 발생 시 관리자에게 경고 알림을 전송하여 신속 대응 지원
6) 새로운 가입자 및 누적 가입자 관리

&nbsp;
<!-- Team -->
## Team Members
* **Team Leader:** 인하대학교 경영학과 권성준, 알고리즘 개발
* **Team Member:** 인하대학교 경영학과 윤서영, 데이터 센싱 및 서버 구축
* **Team Member:** 인하대학교 산업경영공학과 김민선, 대시보드 구현
* **Team Member:** 인하대학교 조선해양공학과 박현지, 문서작


&nbsp;

## Acknowledgement

&nbsp;  

Project Link : [https://github.com/AdvantechPeterPet/PeterPet]
