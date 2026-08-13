[![Notion](https://img.shields.io/badge/노션_포트폴리오_바로가기-%232F343B.svg?style=for-the-badge&logo=notion&logoColor=white)](https://app.notion.com/p/3068942a9aa6808296ecf9d57a215e4f?source=copy_link)

### 프로젝트 개요

* **성격 :** 상명대학교 고급게임소프트웨어개발 2 전공 수업 프로젝트
* **핵심 목표 :** Unreal Engine 5와 C++를 활용하여 사격 반동 시스템과 전략적인 스탯 빌딩이 결합된 1인칭 생존 FPS 액션 게임 개발
* **개발 환경 :** Unreal 5, C++
    > 🔖 **[게임소개]**
    >
    > **보랏빛 증오 '마라'로 물든 마을에서 살아남는 1인칭 생존 혈투**
    >
    > 평화롭던 서부의 '모래풀 마을'이 미지의 먼지 '마라'에 의해 오염되어 이웃들이 서로를 공격하는 싸움터로 변했습니다.
    >
    > 끝없이 몰려오는 '마라 야수'들을 상대로, 사실적인 총기 반동이 적용된 사격과 대시/수류탄 등 다채로운 스킬을 활용해 전장을 장악해야 합니다.
    >
    > 매 판 변화하는 8가지 능력치 선택을 통한 전략적인 성장으로 한계에 도전해 보세요!

---

### 📖 게임 개요

<p align="center">
  <img width="800" alt="모래풀 마을" src="https://github.com/user-attachments/assets/b4696e6f-e5d4-4160-bac8-f5033ec369ea" />
  <br>
  <sub>▲ 모래풀 마을</sub>
</p>

<br>

- **스토리**
  - **잃어버린 평화, 보랏빛 증오로 뒤덮인 모래풀 마을**
  - 서부의 평화로운 '모래풀 마을'이 하늘에서 내린 보랏빛 먼지 '마라'에 오염되었습니다. 
  - 증오로 뒤틀린 이웃들이 서로를 공격하는 혼란 속에서, 주인공은 마을의 평화를 되찾기 위한 혈투를 시작합니다.

- **게임 목표**
  - **끝없이 몰려오는 [마라 야수]들로부터 살아남으세요.**
  - 끝없이 강해지고 기하급수적으로 늘어나는 [마라 야수]들로부터 최대한 오래 생존하세요. 사격과 스킬로 적을 처치하고, 레벨업을 통해 능력치를 전략적으로 강화하는 것이 핵심입니다.

- **몰입형 인터랙션과 전략적 성장**
  - **사실적인 사격감과 전략적인 스탯 빌딩**
  - 1인칭 시점에서 구현된 정교한 반동 시스템과 탄환 궤적은 실제 서부의 총잡이가 된 듯한 생생한 타격감을 제공합니다. 위급한 순간에는 **[대쉬]** 스킬로 적의 공격을 기민하게 회피하고, **[수류탄]**을 던져 몰려드는 적들을 일거에 소탕하는 쾌감을 느낄 수 있습니다. 특히 레벨업 시 나타나는 능력치 선택 인터페이스를 통해 자신의 플레이 스타일에 맞는 강화 항목을 전략적으로 골라야만, 더욱 강력해지는 적들의 공세를 버텨낼 수 있습니다.

---

### 🎨 게임 컨셉 및 주요 특징

<p align="center">
  <img width="800" alt="UI가이드" src="https://github.com/user-attachments/assets/37ccf2cc-ee68-4e36-a201-2f0d6936f890" />
  <br>
  <sub>▲ UI 가이드</sub>
</p>

<br>

#### 🏃‍♂️ 캐릭터 이동 시스템

- `WASD` 키를 이용한 기본 이동과 `SPACE` 점프를 지원합니다.
- `Shift` 키로 대시(Dash)를 사용하여 순간적으로 거리를 벌리거나 적의 공격을 회피할 수 있으며, 쿨타임은 UI를 통해 실시간으로 확인 가능합니다.

<br>

#### 💥 전투 메커니즘 및 스킬

- **사격 시스템 (`좌클릭`) :**
  - 총기 반동과 탄속이 적용된 사실적인 1인칭 사격을 지원합니다.

- **수류탄 투척 (`우클릭`) :**
  - 몰려드는 적들을 일거에 소탕하는 강력한 광역 피해 스킬입니다.

- **잔탄 관리 :**
  - 화면 우하단 UI를 통해 실시간으로 현재 장전된 탄약과 최대 탄약 수를 확인할 수 있습니다.

<br>

#### 🖥️ HUD 및 UI (인게임 인터페이스)

- **체력 및 경험치 :**
  - 좌하단의 붉은 게이지(HP)와 하단의 초록색 게이지(Exp)로 상태를 확인할 수 있습니다.

- **스킬 쿨타임 :**
  - 우하단의 탄약 표시 옆 아이콘으로 대시 및 수류탄 스킬의 재사용 대기시간을 확인할 수 있습니다.

<br>

#### ⬆️ 레벨업 및 성장 시스템

<p align="center">
  <img width="800" alt="레벨업 UI" src="https://github.com/user-attachments/assets/108cf8d9-e710-4eed-bf5b-527132917dff" />
  <br>
  <sub>▲ 레벨업시 능력치 선택 UI</sub>
</p>

<br>

- 경험치 바가 가득 차면 능력치 선택 UI가 활성화됩니다.
- 최대 체력 증가, 장전 시간 감소, 총알 속도 증가 등 총 8가지 강화 항목 중 무작위로 제시되는 3가지 선택지 중 한 가지를 선택할 수 있습니다.

<div align="center">

| 총알 속도 증가 | 총알 갯수 증가 | 발사 딜레이 감소 | 장전 시간 감소 |
| :---: | :---: | :---: | :---: |
| <img width="160" src="https://github.com/user-attachments/assets/c7f0345c-0e6c-432e-8433-febbef5024ec" /> | <img width="160" src="https://github.com/user-attachments/assets/c91e8d85-78b2-4ef7-9cbd-61f383bd8f08" /> | <img width="160" src="https://github.com/user-attachments/assets/6fa58af9-1a92-41c7-9970-5cda379efd39" /> | <img width="160" src="https://github.com/user-attachments/assets/e45f811b-5c53-45ed-94aa-1b19e3596623" /> |
| **최대 체력 증가** | **이동 속도 증가** | **대시 쿨 감소** | **수류탄 쿨 감소** |
| <img width="160" src="https://github.com/user-attachments/assets/9808ffa3-4b89-4e73-87c3-e71acbbb1996" /> | <img width="160" src="https://github.com/user-attachments/assets/612e69c7-63af-4140-8f22-0a5b4b399829" /> | <img width="160" src="https://github.com/user-attachments/assets/70b31a37-e820-47e4-b932-c8442cf4b743" /> | <img width="160" src="https://github.com/user-attachments/assets/4d1dc4c5-b9c9-4e11-bcfc-ea346a60688a" /> |


</div>
