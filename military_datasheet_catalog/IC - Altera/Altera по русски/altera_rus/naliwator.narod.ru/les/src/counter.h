
#ifndef COUNTER_H_
#define COUNTER_H_

#include "alt_types.h"
#include "altera_avalon_pio_regs.h"
#include "altera_avalon_timer_regs.h"
#include "sys/alt_irq.h"
#include "system.h"
#include <stdio.h>

void start_message (void);
void timer_init(alt_u32 timer_base, alt_u32 timer_interrupt, alt_u32 timer_irq);
void timer_set_period(alt_u32 timer_period);


#endif /* COUNTER_H_ */
